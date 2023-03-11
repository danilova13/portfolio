import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import CV from './pages/CV';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';


function App() {
  return (
    <section className="min-h-screen">
      <Navbar/>
      <div className="container">
      <Routes>
        <Route path="/" element={ <Homepage/>} />
        <Route path="/about" element={ <About/>} />
        <Route path="/contact" element={ <Contact/>} />
        <Route path="/projects" element={ <Projects/>} />
        <Route path="/cv" element={ <CV/>} />
        
      </Routes>
      </div>
    </section>
  );
}

export default App;
