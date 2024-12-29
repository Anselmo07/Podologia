import "./home.css"

const Home = () => {
    return (
        <div >
            <div className="container-home">
            <h1> PODOLOGÍA CLINICA</h1>
            <img src="https://statics-cuidateplus.marca.com/cms/2022-11/earthing-caminar-descalzo.jpg" alt="Pies" className="imagenPo" />
            </div>
            <section className="section-home">
            <h2>SABIAS QUE</h2>
                <div className="home-h2">
                    <p>
                    La podología es la clave para mantener tus pies saludables, evitar molestias y
                    garantizar tu bienestar. Descubre cómo podemos ayudarte a caminar sin dolor
                    y disfrutar de cada paso.
                    </p>
                
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwG-XNIsdXvMm7M6iKb-TFQP8_OtpslBOBQQ&s" alt="Pies relajados y saludables" className="podology-image" /> */}
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
                    <img src="data:image/jpeg;base64,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" alt="" />
                </div>
                <div className="home-h4">
                    <ul>
                        <li> Corta las uñas de los pies rectas y no demasiado cortas </li>
                        <li> Realiza ejercicio físico de manera regular para activar la circulación sanguínea de los pies</li>
                        <li> Exfolia tus pies regularmente para eliminar la piel muerta y prevenir la formación de callosidades </li>
                        <li> Acude regularmente al podólogo para hacer revisiones y recibir un cuidado </li>
                    </ul>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmUp5ZB5uKG0YHRu5XxhrkgfRhOH4czwBhWA&s" alt="" />
                </div>
                <div className="divImg">
                    <img src="https://img.freepik.com/fotos-premium/campo-flores-verano-salvaje-azul-primer-plano-fondo-paisaje-verano-hermosas-flores-banner-extra-ancho-ia-generativa_427877-1693.jpg" alt="" />
                </div>

            </section>
        </div>
    )
}

export default Home;