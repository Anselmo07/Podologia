import "./home.css"

const Home = () => {
    return (
        <div className="container-home">
            <h1> PODOLOGÍA CLINICA</h1>
            <img src="https://corporal.center/wp-content/uploads/2022/06/oies-1200x676-1.jpg" alt="Pies" className="imagenPo" />
            <section className="section-home">
            <h2>Cuida tus pies, mejora tu vida!</h2>
                <div className="home-h2">
                    <p>
                    La podología es la clave para mantener tus pies saludables, evitar molestias y
                    garantizar tu bienestar. Descubre cómo podemos ayudarte a caminar sin dolor
                    y disfrutar de cada paso.
                    </p>
                
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwG-XNIsdXvMm7M6iKb-TFQP8_OtpslBOBQQ&s" alt="Pies relajados y saludables" className="podology-image" />
                </div>
            </section>
        </div>
    )
}

export default Home;