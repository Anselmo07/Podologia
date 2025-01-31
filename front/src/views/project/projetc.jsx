import { useState, useEffect } from "react";
import axios from "axios";
import sha1 from "js-sha1"; // Importamos la librería sha1
import "./project.css";

const Project = () => {
  const [images, setImages] = useState([]);
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

  const uploadImage = async (e) => {
    const file = e.target.files[0]; // Obtiene el archivo seleccionado
    if (!file) return;

    setLoading(true);

    // Generamos el timestamp y la firma
    const timestamp = Math.floor(Date.now() / 1000); // Timestamp actual
    const signature = generateSignature(timestamp);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("api_key", import.meta.env.VITE_CLOUDINARY_API_KEY);
    formData.append("timestamp", timestamp);
    formData.append("signature", signature);

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData
      );

      // Guardar la imagen en el backend
      await axios.post("http://localhost:3000/images", {
        url: res.data.secure_url,
        title,  // Enviar el título junto con la URL de la imagen
      });

      // Actualizar las imágenes en el estado (después de haber subido la imagen)
      setImages([...images, { title, url: res.data.secure_url }]);
      setTitle("");
    } catch (error) {
      console.error("Error al subir la imagen", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="proyectos-container">
      <h2>Proyectos: Antes y Después</h2>

      <input
        type="text"
        placeholder="Título del proyecto"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="file"
        onChange={uploadImage}
        accept="image/*"
        disabled={loading}
      />
      {loading && <p>Subiendo imagen...</p>}

      <div className="galeria">
        {images.map((img, index) => (
          <div key={index} className="proyecto">
            <h3>{img.title}</h3>
            <img src={img.url} alt={img.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
