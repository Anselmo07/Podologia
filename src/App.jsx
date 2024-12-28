import './App.css'
import NavBar from './components/navBar/navBar';
import Home from './views/home/home';
import About from './views/about/about';

function App() {
  

  return (
    <div>
      <NavBar />
      <Home/>
      <About/>
    </div>
  )
}

export default App
