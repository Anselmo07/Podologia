import "./footer.css"

const Footer = () => {

    return(
        <footer className="footer">
            <div className="cotainer">
                <p>&copy; {new Date().getFullYear()} Todos los derechos reservados - Desarrollo Web : <a href="https://portafolioanselmo.vercel.app" alt="Mi web">Anselmo Vecchio</a></p>
            </div>
        </footer>
    )
}

export default Footer;