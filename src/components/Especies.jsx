import React from 'react'
import Navbar from './Navbar';
import { ESPECIES } from '../utils/generate_data'

const Especies = () => {
  const dataEspecie = ESPECIES
  return (
    <>
      <Navbar />
      <h1 className='bajarTexto'>Especie</h1>
      <div className="container">
      {dataEspecie.map((especie, index) => (        
          <div className="card" style={{ "--clr": "#249eff" }} key={especie.id}>
          <div className="box">
            <div className="icon">
              <div className="iconBx"><ion-icon name="star-outline"></ion-icon></div>
            </div>
            <div className="content">
                <h3>ID: {index+1}</h3>
                <p>
                   Nombre: {especie} <br/>
                </p>
                <a href="#">Read More</a>
            </div>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};

export default Especies