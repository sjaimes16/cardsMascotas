import React from 'react'
import { testimoniosGenerados } from '../utils/generate_data'
import Navbar from './Navbar';

const Testimonios = () => {
    console.log(testimoniosGenerados)
    return (
        <>
          <Navbar />
          <h1 className='bajarTexto'>Ubicaciones</h1>
          <div className="container">
          {testimoniosGenerados.map((testimonio, index) => (        
              <div className="card" style={{ "--clr": "#7c639c" }} key={index}>
              <div className="box">
                <div className="icon">
                  <div className="iconBx"><ion-icon name="chatbubble-ellipses-outline"></ion-icon></div>
                </div>
                <div className="content">
                    <h3>ID: {index+1}</h3>
                    <p>
                       Testimonios: {testimonio} <br/>
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

export default Testimonios