import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <header>
		      <a href="#" className="logo">Veterinaria</a>
		      <div className="menuToggle"></div>
          <ul className="nav">
            <li className="active"><a href="#home">Inicio</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Testimonios</a></li>
          </ul>
	    </header>
    </>
    // <nav>
    //   <ul>
    //     <li>
    //       <Link to="/">home</Link>
    //     </li>
    //     <li>
    //       <Link to="/about">Acerca de</Link>
    //     </li>
    //     <li>
    //       <Link to="/contact">Contacto</Link>
    //     </li>
    //     <li>
    //       <Link to="/new">NewPage</Link>
    //     </li>
    //     <li>
    //       <Link to="/newPage">New Page Component</Link>
    //     </li>
    //     <li>
    //       <Link to="/persona">Persona</Link>
    //     </li>
    //     <li>
    //       <Link to="/mascota">Mascota</Link>
    //     </li>
    //   </ul>
    // </nav>
  )
}

export default Navbar