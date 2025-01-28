import { useState } from "react";
import "./navBar.css";
import pies from "../../assets/pies.png";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="NavBar">
            <div className="imgNavbar">
                <img src={pies} alt="Logo" />
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
