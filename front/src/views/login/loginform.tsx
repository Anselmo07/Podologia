import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = ({ setIsAuthenticated, setIsAdmin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/users/login", { email, password });

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
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginForm;

