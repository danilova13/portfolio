import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import CV from './pages/CV';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';


function App() {
  return (
      <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll">
        <Navbar/>
        <div className="container">
          <Routes>
            <Route path="/" element={ <Homepage/>} />
            <Route path="/hobbies" element={ <About/>} />
            <Route path="/contact" element={ <Contact/>} />
            <Route path="/projects" element={ <Projects/>} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
