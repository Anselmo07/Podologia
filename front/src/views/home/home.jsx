import "./home.css"
import pie from "../../assets/pie.png"
import zapatilla from "../../assets/zapatilla.png"
import ambo from "../../assets/ambo.png"
import home0 from "../../assets/home0.jpg"
import ejercicio from "../../assets/ejercicio.jpg"

const Home = () => {
    return (
        <div className="containerHome">
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
            <section className="section2">
                <div className="cardContainer">
                    <div className="card">
                        <img src={pie} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Lavate tus pies con jabon neutro !Secalos muy bien!</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={zapatilla} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Usa calzado idoneo, comodo y adecuado</p>
                        </div>
                    </div>
                    <div className="card" >
                        <img src={ejercicio} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Realiza ejercicio físico de manera regular para activar la circulación sanguínea de los pies</p>
                        </div>
                    </div>
                    <div className="card cardImport">
                        <img src={ambo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Acude regularmente al podólogo para hacer revisiones y recibir un cuidado</p>
                        </div>
                    </div>
                    
                    
                </div>
                

            </section>
        </div>
    )
}

export default Home;