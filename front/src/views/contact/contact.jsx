import "./contact.css"
import wsp from "../../assets/wsp.jpg"
import adress from "../../assets/adress.png"

const Contact = () => {
    return (

        <div className="containerContact" id="contact">
            <h2 className="conctact-h2">CONTACTO</h2>
            <div className="card-contact">
            <ul>
                <li><img src={adress} alt="Ubicacion" className="ubicacion"/></li>
                <li>👩🏻‍⚕️Podologia Clinica</li>
                <li>🌎Ciudad de Paraná</li>
                <li>📍Av. Francisco Ramirez 2117</li>
                <li>
                    <a href="https://wa.me/3434807499" target="_blank" rel="noopener noreferrer">
                        <img src={wsp} alt="WhatsApp"/>  WhatsApp 3434 80-7499
                    </a>
                    <li><a href="karyfaez@gmail.com" target="_blank" rel="noopener noreferrer">✉️ karyfaez@gmail.com</a></li>
                </li>
                <li>Turnos programados</li>
            </ul>
        </div>
        </div>
    );
};

export default Contact;