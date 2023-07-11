import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import NewPage from './components/NewPage';
import NewComponentePage from './components/NewComponentePage';
import Mascotas from './components/Mascotas';
import Persona from './components/Persona';
import Especies from './components/Especies';
import Ubicaciones from './components/Ubicaciones';
import Testimonios from './components/Testimonios';
import PesoMascotas from './components/PesoMascotas';

function App() {


  return (
    <>
      <Router>
      <Routes>
        <Route exact path="/" element={<Persona/>}/>
        {/* <Route exact path="/about" element={<AboutPage/>}/>
        <Route exact path="/contact" element={<ContactPage/>}/>
        
        <Route exact path="/newPage" element={<NewComponentePage/>}/>
        <Route exact path="/especies" element={<Especies/>}/> */}
        <Route exact path="/new" element={<NewPage/>}/>
        <Route exact path="/mascota" element={<Mascotas/>}/>
        <Route exact path="/persona" element={<Persona/>}/>
        <Route exact path="/ubicaciones" element={<Ubicaciones/>}/>
        <Route exact path="/testimonios" element={<Testimonios/>}/>
        <Route exact path="/pesoMascotas" element={<PesoMascotas/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
