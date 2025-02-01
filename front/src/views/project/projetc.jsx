import { useState, useEffect } from "react";
import axios from "axios";
import sha1 from "js-sha1"; // Importamos la librería sha1
import "./project.css";

const Project = () => {
  const [images, setImages] = useState([]);
  const [beforeImage, setBeforeImage] = useState(null);
  const [afterImage, setAfterImage] = useState(null);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  // Función para generar la firma utilizando js-sha1
  const generateSignature = (timestamp) => {
    const API_SECRET = import.meta.env.VITE_CLOUDINARY_API_SECRET;
    return sha1(`timestamp=${timestamp}${API_SECRET}`);
  };

  // Obtener las imágenes desde el backend
  const fetchImages = async () => {
    try {
      const res = await axios.get("http://localhost:3000/images");
      setImages(res.data);  // Establecemos las imágenes obtenidas del backend
    } catch (error) {
      console.error("Error al obtener las imágenes", error);
    }
  };

  useEffect(() => {
    fetchImages(); // Llamar a la función cuando se cargue el componente
  }, []);

  const uploadImage = async () => {
    if (!beforeImage || !afterImage) return; // Verificamos si las dos imágenes están seleccionadas

    setLoading(true);

    // Generamos el timestamp y la firma para Cloudinary
    const timestamp = Math.floor(Date.now() / 1000);
    const signature = generateSignature(timestamp);

    // Subimos las imágenes
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

      // Subir imagen "antes"
      const resBefore = await axios.post(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
        formDataBefore
      );

      // Subir imagen "después"
      const resAfter = await axios.post(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
        formDataAfter
      );

      // Guardar ambas imágenes en el backend
      await axios.post("http://localhost:3000/images", {
        beforeUrl: resBefore.data.secure_url,
        afterUrl: resAfter.data.secure_url,
        title,  // Enviar el título junto con las URLs de las imágenes
      });

      // Actualizar las imágenes en el estado
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

  // Función para eliminar la imagen
  const handleDelete = async (title) => {
    try {
      await axios.delete(`http://localhost:3000/images/${title}`);
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
            <button onClick={() => handleDelete(img.title)} className="delete">X</button> {/* Botón para eliminar la imagen */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
