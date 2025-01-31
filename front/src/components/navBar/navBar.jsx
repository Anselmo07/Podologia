import { useState } from "react";
import "./navBar.css";
import pie from "../../assets/pie.png";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="NavBar">
            <div className="imgNavbar">
                <img src={pie} alt="Logos" />
            </div>

            <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>

            <div className="container">
                <ul className={menuOpen ? "active" : ""}>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#about">SOBRE MI</a></li>
                    <li><a href="#contact">CONTACTO</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
