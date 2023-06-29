import React from 'react'
import Navbar from './Navbar'
import newpage from '../media/img/newpage.png';

const NewPage = () => {
  return (
    <div>
    <Navbar />
    <p>Esta es la pagina esta es mi nueva pagina</p> 
    <img className="imagen" src={newpage} />
    
  </div>
  )
}

export default NewPage