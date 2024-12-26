import "./navBar.css"

const NavBar = () => {
    return(
        <nav className="NavBar">
            <div className="container">
                <ul>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#about">SOBRE MI</a></li>
                    <li><a href="#estudio">ESTUDIOS</a></li>
                    <li><a href="#contact">CONTACTO</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;