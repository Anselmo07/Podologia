import { useState, useEffect } from "react";
import axios from "axios";
import sha1 from "js-sha1"; // Importamos la librería sha1
import "./project.css";

const API_URL = import.meta.env.VITE_API_URL

const Project = () => {
  const [images, setImages] = useState([]);
  const [beforeImage, setBeforeImage] = useState(null);
  const [afterImage, setAfterImage] = useState(null);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const generateSignature = (timestamp) => {
    const API_SECRET = import.meta.env.VITE_CLOUDINARY_API_SECRET;
    return sha1(`timestamp=${timestamp}${API_SECRET}`);
  };

  const fetchImages = async () => {
    try {
      const res = await axios.get(`${API_URL}/images`);
      setImages(res.data);
    } catch (error) {
      console.error("Error al obtener las imágenes", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const uploadImage = async () => {
    if (!beforeImage || !afterImage) return;

    setLoading(true);
    
    const timestamp = Math.floor(Date.now() / 1000);
    const signature = generateSignature(timestamp);

    try {
      const formDataBefore = new FormData();
      formDataBefore.append("file", beforeImage);
      formDataBefore.append("api_key", import.meta.env.VITE_CLOUDINARY_API_KEY);
      formDataBefore.append("timestamp", timestamp);
      formDataBefore.append("signature", signature);

      const formDataAfter = new FormData();
      formDataAfter.append("file", afterImage);
      formDataAfter.append("api_key", import.meta.env.VITE_CLOUDINARY_API_KEY);
      formDataAfter.append("timestamp", timestamp);
      formDataAfter.append("signature", signature);

      const resBefore = await axios.post(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
        formDataBefore
      );

      const resAfter = await axios.post(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
        formDataAfter
      );

      await axios.post(`${API_URL}/images`, {
        beforeUrl: resBefore.data.secure_url,
        afterUrl: resAfter.data.secure_url,
        title, 
      });

      setImages([...images, { title, beforeUrl: resBefore.data.secure_url, afterUrl: resAfter.data.secure_url }]);
      setBeforeImage(null);
      setAfterImage(null);
      setTitle("");
    } catch (error) {
      console.error("Error al subir las imágenes", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (title) => {
    try {
      await axios.delete(`${API_URL}/images/${title}`);
      setImages(images.filter(image => image.title !== title));
    } catch (error) {
      console.error("Error al eliminar la imagen", error);
    }
  };

  return (
    <div className="proyectos-container">
      <h2>Pacientes</h2>

      <input className="title"
        type="text"
        placeholder="Título del proyecto"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="file-inputs">
        <input
          type="file"
          onChange={(e) => setBeforeImage(e.target.files[0])}
          accept="image/*"
          disabled={loading}
        />
        <input
          type="file"
          onChange={(e) => setAfterImage(e.target.files[0])}
          accept="image/*"
          disabled={loading}
        />
      </div>
      <button onClick={uploadImage} disabled={loading} className="subir">
        Subir Imágenes
      </button>
      {loading && <p>Subiendo imágenes...</p>}

      <div className="galeria">
        {images.map((img, index) => (
          <div key={index} className="proyecto">
            <h3>{img.title}</h3>
            <div className="before-after">
              <div>
                <h4>Antes</h4>
                <img src={img.beforeUrl} alt="Antes" />
              </div>
              <div>
                <h4>Después</h4>
                <img src={img.afterUrl} alt="Después" />
              </div>
            </div>
            <button onClick={() => handleDelete(img.title)} className="delete">X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;