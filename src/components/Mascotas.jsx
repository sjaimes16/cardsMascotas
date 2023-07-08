import React, { useState } from 'react'
import Navbar from './Navbar'
import { dataMascota } from '../utils/generate_data'

const Mascotas = () => {

  const [mascotaInfo, setMascotaInfo] = useState(dataMascota);
  const [nuevaMascota, setNuevaMascota] = useState({
    id_dueño: '',
    nombreMascota: '',
    especie: '',
    sexo: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNuevaMascota((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar acciones con la nueva mascota, como enviarla al servidor o actualizar el estado de `mascotaInfo`
    setMascotaInfo((prevState) => [...prevState, nuevaMascota]);
    setNuevaMascota({
      id_dueño: '',
      nombreMascota: '',
      especie: '',
      sexo: ''
    });
  };

  return (
    <>
    <Navbar />
    <h1 className='bajarTexto'>Mascotas</h1>
    <div className="container">
      {mascotaInfo.map((mascota, index) => (
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
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2>Agregar Mascota</h2>
          <label>
            ID dueño:
            <input
              type="text"
              name="id_dueño"
              value={nuevaMascota.id_dueño}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Nombre mascota:
            <input
              type="text"
              name="nombreMascota"
              value={nuevaMascota.nombreMascota}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Especie:
            <input
              type="text"
              name="especie"
              value={nuevaMascota.especie}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Sexo:
            <input
              type="text"
              name="sexo"
              value={nuevaMascota.sexo}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Agregar</button>
        </form>
      </div>
    </>
  )
}

export default Mascotas