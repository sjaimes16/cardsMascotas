import React from 'react'
import Navbar from './Navbar'
import { dataMascota } from '../utils/generate_data'

const Mascotas = () => {

  return (
    <>
    <Navbar />
    <h1 className='bajarTexto'>Mascotas</h1>
    <div className="container">
      {dataMascota.map((mascota, index) => (
        <div className="card" style={{ "--clr": "#ff1f6b" }} key={index}>
        <div className="box">
          <div className="icon">
            <div className="iconBx"><ion-icon name="paw-outline"></ion-icon></div>
          </div>
          <div className="content">
              <h3>ID dueño: {mascota.id_dueño}</h3>
              <p>
                 Nombre mascota: {mascota.nombreMascota} <br/>
                 Especie: {mascota.especie}<br/>
                 Sexo: {mascota.sexo}
              </p>
              <a href="#">Read More</a>
          </div>
        </div>
      </div>
      ))}
      </div>
    </>
  )
}

export default Mascotas