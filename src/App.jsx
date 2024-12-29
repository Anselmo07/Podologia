import './App.css'
import NavBar from './components/navBar/navBar';
import Home from './views/home/home';
import About from './views/about/about';
import Estudios from './views/estudios/estudios';
import Contact from './views/contact/contact';

function App() {
  

  return (
    <div>
      <NavBar />
      <Home/>
      <About/>
      <Estudios/>
      <Contact/>
    </div>
  )
}

export default App
