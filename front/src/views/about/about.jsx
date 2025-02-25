
import "./about.css";
import mifoto from "./../../assets/mifoto.jpeg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="about" ref={ref}>
      <h2 className="about-h2">SOBRE MÍ</h2>
      <motion.div
        className="aboutSectionContainer"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 2, ease: "easeOut" }}
      >

        <div className="about-container">
          <div className="about-div">
            <h3 className="about-h3">Pga. Claudia Carina Faez</h3>
            <p className="aboutText">
              Podóloga profesional con una trayectoria de más de 10 años en el
              cuidado integral de la salud podológica. Me gradué en el año 2014
              en la Universidad Nacional del Litoral (UNL). Desde entonces, he
              trabajado con pacientes de todas las edades, enfocándome en la
              prevención, el diagnóstico y el tratamiento de diversas afecciones
              del pie. Mi objetivo es mejorar la calidad de vida de las personas
              a través de un enfoque personalizado y profesional, promoviendo el
              bienestar desde la base: nuestros pies.
            </p>
          </div>

          <div className="about-img">
            <img src={mifoto} alt="Foto de Perfil" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;