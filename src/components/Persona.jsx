import React, { useState } from 'react'
import Navbar from './Navbar';
import { dataPersona } from '../utils/generate_data'

const Persona = () => {
  const [dataPersonaInfo, setDataPersonaInfo] = useState(dataPersona)
  const [nuevaPersona, setNuevaPersona] = useState({
    id: '',
    nombre: '',
    edad: '',
    numeroMascotas: ''
  });
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNuevaPersona((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar acciones con la nueva mascota, como enviarla al servidor o actualizar el estado de `mascotaInfo`
    setDataPersonaInfo((prevState) => [...prevState, nuevaPersona]);
    setNuevaPersona({
      id: '',
      nombre: '',
      edad: '',
      numeroMascotas: ''
    });
  };

  return (
    <>
      <Navbar />
      <h1 className='bajarTexto'>Personas</h1>
      <div className="container">
      {dataPersonaInfo.map((persona) => (        
          <div className="card" style={{ "--clr": "#249eff" }} key={persona.id}>
          <div className="box">
            <div className="icon">
              <div className="iconBx"><ion-icon name="accessibility-outline"></ion-icon></div>
            </div>
            <div className="content">
                <h3>ID: {persona.id}</h3>
                <p>
                   Nombre: {persona.nombre} <br/>
                   Edad: {persona.edad}<br/>
                   Número de mascotas: {persona.numeroMascotas}
                </p>
                <a href="#">Read More</a>
            </div>
          </div>
        </div>
      ))}
      </div>
      <div className="container row">
        <form onSubmit={handleSubmit}>
          <h2>Agregar Persona</h2>
          <label className='col-6'>
            ID persona:
            <input
              type="text"
              name="id"
              value={nuevaPersona.id}
              onChange={handleInputChange}
              className='form-control'
            />
          </label>
          <label className='col-6'>
            Nombre:
            <input
              type="text"
              name="nombre"
              value={nuevaPersona.nombre}
              onChange={handleInputChange}
              className='form-control'
            />
          </label>
          <label className='col-6'>
            Edad:
            <input
              type="text"
              name="edad"
              value={nuevaPersona.edad}
              onChange={handleInputChange}
              className='form-control'
            />
          </label>
          <label className='col-6'>
            Número de mascotas:
            <input
              type="text"
              name="numeroMascotas"
              value={nuevaPersona.numeroMascotas}
              onChange={handleInputChange}
              className='form-control'
            />
          </label>
          <button type="submit" className='btn btn-primary'>Agregar</button>
        </form>
      </div>
    </>
  );
};

export default Persona