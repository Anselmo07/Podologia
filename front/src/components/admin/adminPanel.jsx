import { useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [email, setEmail] = useState("");

  const makeAdmin = async () => {
    try {
      await axios.put("http://localhost:3000/users/make-admin", { email });
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
