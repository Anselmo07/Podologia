import "./about.css"
import mifoto from "./../../assets/mifoto.jpeg"

const About = () => {
    return(
        <section id="about" className="about">
            <h2 className="about-h2">SOBRE MI</h2>
            <div className="aboutSectionContainer">
                <div className="about-container">
                    <div className="about-div">

                        <h3 className="about-h3">Pga. Claudia Carina Faez</h3>
                        <p className="aboutText">
                            Podóloga profesional con una trayectoria de más de 10 años en el cuidado integral de la salud podológica. Me gradué en el año 2014 en la Universidad Nacional del Litoral (UNL).
                            Desde entonces, he trabajado con pacientes de todas las edades, enfocándome en la prevención, el diagnóstico y el tratamiento de diversas afecciones del pie. Mi objetivo es mejorar la calidad de vida de las personas a través de un enfoque personalizado y profesional, promoviendo el bienestar desde la base: nuestros pies.
                        </p>    
                    </div>
                    <div className="about-img">
                        <img src={mifoto} alt="Foto de Perfil" />
                    </div>
                </div>
            </div>
            

        </section>
    );
};

export default About;