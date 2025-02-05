import { useState, useEffect } from "react";
import "./home.css";
import pie from "../../assets/pie.png";
import zapatilla from "../../assets/zapatilla.png";
import ambo from "../../assets/ambo.png";
import home0 from "../../assets/home0.jpg";
import home1 from "../../assets/home1.jpg";
import ejercicio from "../../assets/ejercicio.jpg";

const Home = () => {
    const [homeImage, setHomeImage] = useState(home1);

    useEffect(() => {

        const updateImage = () => {
            if (window.innerWidth <= 480) {
                setHomeImage(home0);
            } else {
                setHomeImage(home1); 
            }
        };

        updateImage();

        window.addEventListener("resize", updateImage);

        return () => {
            window.removeEventListener("resize", updateImage);
        };
    }, []);

    return (
        <div className="containerHome">
            <div className="container-home" id="home">
                <h1> PODOLOGÍA CLINICA</h1>
                <img src={homeImage} alt="home" className="imagenPo" />
            </div>

            <section className="section-home">
                <h2>SABÍAS QUE</h2>
                <div className="home-h2">
                    <p>
                        La podología es la clave para mantener tus pies saludables, evitar molestias y
                        garantizar tu bienestar. Descubre cómo podemos ayudarte a caminar sin dolor
                        y disfrutar de cada paso.
                    </p>
                </div>
            </section>

            <section className="section2">
                <div className="cardContainer">
                    <div className="card">
                        <img src={pie} className="card-img-top" alt="pie" />
                        <div className="card-body">
                            <p className="card-text">Lávate tus pies con jabón neutro. ¡Sécalos muy bien!</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={zapatilla} className="card-img-top" alt="tenis" />
                        <div className="card-body">
                            <p className="card-text">Usa calzado idóneo, cómodo y adecuado</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={ejercicio} className="card-img-top" alt="ejercicio" />
                        <div className="card-body">
                            <p className="card-text">Realiza ejercicio físico de manera regular para activar la circulación sanguínea de los pies</p>
                        </div>
                    </div>
                    <div className="card cardImport">
                        <img src={ambo} className="card-img-top" alt="ambo" />
                        <div className="card-body">
                            <p className="card-text">Acude regularmente al podólogo para hacer revisiones y recibir un cuidado</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;