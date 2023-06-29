import React from 'react'
import { direccionesGeneradas } from '../utils/generate_data'
import Navbar from './Navbar';

const Ubicaciones = () => {
    console.log(direccionesGeneradas)
    return (
        <>
          <Navbar />
          <h1 className='bajarTexto'>Ubicaciones</h1>
          <div className="container">
          {direccionesGeneradas.map((ubicacion, index) => (        
              <div className="card" style={{ "--clr": "#efdfbb" }} key={index}>
              <div className="box">
                <div className="icon">
                  <div className="iconBx"><ion-icon name="storefront-outline"></ion-icon></div>
                </div>
                <div className="content">
                    <h3>ID: {index+1}</h3>
                    <p>
                       Ubicación: {ubicacion} <br/>
                    </p>
                    <a href="#">Read More</a>
                </div>
              </div>
            </div>
          ))}
          </div>
        </>
      );
}

export default Ubicaciones