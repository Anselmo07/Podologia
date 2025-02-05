import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./login.css"

const API_URL = import.meta.env.VITE_API_URL;

const LoginForm = ({ setIsAuthenticated, setIsAdmin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/users/login`, { email, password });

      if (response.data.message === "Inicio de sesión exitoso") {
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("role", response.data.role);

        setIsAuthenticated(true);
        setIsAdmin(response.data.role === "admin");

        window.dispatchEvent(new Event("storage"));

        navigate("/");
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage("Hubo un error al intentar iniciar sesión");
    }
  };

  return (
    <div className="login">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin} className="loginContainer">
        <div className="loginDiv">
          <label htmlFor="email">Correo electrónico </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="loginDiv">
          <label htmlFor="password">Contraseña </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="loginButton">Iniciar sesión</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginForm;