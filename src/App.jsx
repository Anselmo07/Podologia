import './App.css'
import NavBar from './components/navBar/navBar';
import Home from './views/home/home';
import About from './views/about/about';
import Contact from './views/contact/contact';
import Footer from './components/footer/footer';

function App() {
  

  return (
    <div>
      <NavBar />
      <Home/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
