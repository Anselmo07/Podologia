import "./home.css"
import home1 from "../../assets/home1.jpg"
import home2 from "../../assets/home2.jpg"
import home0 from "../../assets/home0.jpg"

const Home = () => {
    return (
        <div >
            <div className="container-home" id="home">
            <h1> PODOLOGÍA CLINICA</h1>
            <img src={home0} alt="home0" className="imagenPo" />
            </div>
            <section className="section-home">
            <h2>SABIAS QUE</h2>
                <div className="home-h2">
                    <p>
                    La podología es la clave para mantener tus pies saludables, evitar molestias y
                    garantizar tu bienestar. Descubre cómo podemos ayudarte a caminar sin dolor
                    y disfrutar de cada paso.
                    </p>
                
                </div>
            </section>
            <section >
            <h2> ALGUNOS TIPS</h2>
            <div className="home-h3">
                    <ul>
                        <li> Cámbiate los calcetines al menos una vez al día </li>
                        <li> Lavate tus pies con jabon neutro !Secalos muy bien!</li>
                        <li> No camines decalzco </li>
                        <li> Usa calzado idoneo </li>
                    </ul>
                    <img src={home1} alt="home1" />
                </div>
                <div className="home-h4">
                    <ul>
                        <li> Corta las uñas de los pies rectas y no demasiado cortas </li>
                        <li> Realiza ejercicio físico de manera regular para activar la circulación sanguínea de los pies</li>
                        <li> Exfolia tus pies regularmente para eliminar la piel muerta y prevenir la formación de callosidades </li>
                        <li> Acude regularmente al podólogo para hacer revisiones y recibir un cuidado </li>
                    </ul>
                    <img src={home2} alt="home2" />
                </div>

            </section>
        </div>
    )
}

export default Home;