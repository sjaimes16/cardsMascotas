import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <header>
		      <a href="#" className="logo">Persona-Mascota</a>
		      <div className="menuToggle"></div>
          <ul className="nav">
            <li className="active"><Link to="/">home</Link></li>
            <li><Link to="/about">Acerca de</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
            {/* <li><Link to="/new">NewPage</Link></li>
            <li><Link to="/newPage">New Page Component</Link></li> */}
            <li><Link to="/persona">Persona</Link></li>
            <li><Link to="/mascota">Mascota</Link></li>
            <li><Link to="/especies">Especies</Link></li>
            <li><Link to="/ubicaciones">Ubicaciones</Link></li>
            <li><Link to="/testimonios">Testimonios</Link></li>
          </ul>
	    </header>
    </>
  )
}

export default Navbar