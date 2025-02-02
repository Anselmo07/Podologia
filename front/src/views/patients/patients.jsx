import { useState, useEffect } from "react";
import axios from "axios";
import "./patients.css";

const Patients = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const res = await axios.get("http://localhost:3000/images");
      setImages(res.data);
    } catch (error) {
      console.error("Error al obtener las imágenes", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="pacientes-container" id="patients">
      <h2>Pacientes</h2>

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Patients;
