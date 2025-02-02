import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navBar.css";
import pie from "../../assets/pie.png";

const NavBar = ({ isAuthenticated, setIsAuthenticated, setIsAdmin }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("userId");
        localStorage.removeItem("role");
        setIsAuthenticated(false);
        setIsAdmin(false);
        navigate("/");
    };

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
                    <li><a href="#about">SOBRE MÍ</a></li>
                    <li><a href="#patients">PACIENTES</a></li>
                    <li><a href="#contact">CONTACTO</a></li>

                    {!isAuthenticated ? (
                        <li><Link to="/login">INICIAR SESIÓN</Link></li>
                    ) : (
                        <li><button onClick={handleLogout}>CERRAR SESIÓN</button></li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
