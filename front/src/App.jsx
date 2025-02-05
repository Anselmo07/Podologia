import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar/navBar";
import Home from "./views/home/home";
import About from "./views/about/about";
import Contact from "./views/contact/contact";
import Footer from "./components/footer/footer";
import Project from "./views/project/projetc";
import Patients from "./views/patients/patients";
import LoginForm from "./views/login/loginform";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = () => {
      const userId = localStorage.getItem("userId");
      const role = localStorage.getItem("role");

      if (userId && role === "admin") {
        setIsAuthenticated(true);
        setIsAdmin(true);
      } else {
        setIsAuthenticated(false);
        setIsAdmin(false);
      }
    };

    checkAuthStatus();

    window.addEventListener("storage", checkAuthStatus);
    return () => window.removeEventListener("storage", checkAuthStatus);
  }, []);

  return (
    <Router>
      <NavBar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setIsAdmin={setIsAdmin} />
      <Routes>
        <Route path="/login" element={<LoginForm setIsAuthenticated={setIsAuthenticated} setIsAdmin={setIsAdmin} />} />
        <Route path="/" element={
          <>
            <Home />
            <About id="about" />
            {isAdmin ? <Project id="admin" /> : <Patients />}
            <Contact id="contact" />
          </>
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;