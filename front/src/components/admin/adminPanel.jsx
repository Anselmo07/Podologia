import { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

const AdminPanel = () => {
  const [email, setEmail] = useState("");

  const makeAdmin = async () => {
    try {
      await axios.put(`${API_URL}/users/make-admin`, { email });
      alert("Usuario actualizado a administrador");
    } catch (error) {
      alert("Error al actualizar el usuario", error);
    }
  };

  return (
    <div>
      <h2>Dar permisos de administrador</h2>
      <input
        type="email"
        placeholder="Correo del usuario"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={makeAdmin}>Hacer Admin</button>
    </div>
  );
};

export default AdminPanel;