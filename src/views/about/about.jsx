import "./about.css"

const About = () => {
    return(
        <section id="About" className="about">

            <h2 className="about-h2">SOBRE MI</h2>

            <div className="about-container">
                <div className="about-div">

                    <h3 className="about-h3">Dra. Claudia Carina Faez</h3>
                    <p className="aboutText">
                        Podóloga profesional con una trayectoria de más de 20 años en el cuidado integral de la salud podológica. Me gradué en el año 2004 en la Universidad Nacional del Litoral (UNL), donde adquirí los conocimientos fundamentales para dedicarme con pasión y compromiso a esta profesión.
                        Desde entonces, he trabajado con pacientes de todas las edades, enfocándome en la prevención, el diagnóstico y el tratamiento de diversas afecciones del pie. Mi objetivo es mejorar la calidad de vida de las personas a través de un enfoque personalizado y profesional, promoviendo el bienestar desde la base: nuestros pies.
                    </p>    
                </div>
                <div className="about-img">
                    <img src="https://scontent.faep14-2.fna.fbcdn.net/v/t39.30808-6/455039270_2278348922518019_4471141990209464373_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFSjwQ1DptnW1ZfGVlZFITyBnBNzKWy0VsGcE3MpbLRWx9kwJTrftHUzumL5SYxTWTOy6Va2G1CFv_U5YdyRCNG&_nc_ohc=5FIFVE9mH3wQ7kNvgFE0Ke5&_nc_oc=Adi-SuL0JkpSsB_sjh-0iDczlcmdrWZH6AbnTVkjgRK7pPKK2m7jwxH1MQD4-irD2xs&_nc_zt=23&_nc_ht=scontent.faep14-2.fna&_nc_gid=Aj-bOcIvn4ZK_1nlr3IpanE&oh=00_AYBgLObCwC9mjYkkmivBKsKEIoATSvtjGo-kFDsbndFF8w&oe=67765ABA" alt="" />
                </div>
            </div>

        </section>
    );
};

export default About;