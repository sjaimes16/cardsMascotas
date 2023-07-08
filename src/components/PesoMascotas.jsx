import React, {useState} from 'react'
import Navbar from './Navbar';

const PesoMascotas = () => {
  const [animal, setAnimal]=useState('')
  const [cantidad, setCantidad]=useState('-')
  const [alimento, setAlimento]=useState('-')
  const [peso, setPeso]=useState('-')

  const tablaConversion = {
      perro: {
          nutrecan: {
              0: "50-100",
              5: "100-200",
              10: "200-300",
              20: "300-400",
              30: "400-500",
              40: "500+"
          },
          dogchow: {
              0: "50-100",
              5: "80-150",
              10: "150-200",
              15: "200-250",
              20: "250-350",
              30: "350+",
          },
           agility: {
              0: "30-50",
              3: "50-80",
              5: "80-110",
              7: "110-150",
              10: "150+",
          }
      },
      gato: {
          agility: {
              0: "30-50",
              3: "50-80",
              5: "80-110",
              7: "110-150",
              10: "150+",
          },
          dogchow: {
              0: "50-100",
              5: "80-150",
              10: "150-200",
              15: "200-250",
              20: "250-350",
              30: "350+",
          },
      }
  }

  function Calcular(){
      let total=''
      const animalData = tablaConversion[animal]
      if (animalData) {
          const alimentoData = animalData[alimento]
          if (alimentoData) {
              for ( const [key, value] of Object.entries(alimentoData)) {
                  if (key < peso) {
                      total = value 
                  }      
              }
          }
      }
      
      setCantidad(total)
  }

  function eleccionAnimal(e){
      const animal=e.target.value
      setAnimal(animal)
  }

  function valorPeso(e){
      const peso=e.target.value
      setPeso(peso)
  }

  function eleccionComida(e){
      const eleccion=e.target.value
      setAlimento(eleccion)
  }

  function getMascotaOptios(){
      let options = [
      ]
      for ( const [key, value] of Object.entries(tablaConversion)) {
          options.push(
              <option value={key}>{key}</option>
          )             
      }

      return options
  }

  function getComidaOptios(){

      let comidaSet = new Set();

      for (const [key, value] of Object.entries(tablaConversion.perro)) {
          comidaSet.add(key);
      }

      for (const [key, value] of Object.entries(tablaConversion.gato)) {
          comidaSet.add(key);
      }

      let comida = Array.from(comidaSet).map((key) => (
          <option value={key}>{key}</option>
      ));

      return comida;
  }

  return(
      <div>
      <Navbar />
      <h2>TABLA MASCOTA</h2>
      <p className="text-center">Elige el tipo de alimento, tipo de mascota y digita el peso. Presiona calcular</p>
      <div className="container">
      <table className="table table-striped table-bordered text-center">
          <thead>
              <tr>
                  <th>Tipo Alimento</th>
                  <th>Peso</th>
                  <th>Cantidad Diaria</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>{alimento}</td>
                  <td>{peso}</td>
                  <td>{cantidad}</td>
              </tr>
          </tbody>
          
      </table>
      </div>
      <div className="formulario row">
      <div className="col-6">
      <select onChange={eleccionComida} className="form-select mb-3">
          <option selected>Elige un tipo de alimento</option>
          {
              getComidaOptios()
          }
      </select>
      </div>
      <div className="col-6">
      <select onChange={eleccionAnimal} className="form-select mb-3">
          <option selected>Elige un tipo de mascota</option>
          {
              getMascotaOptios()
          }
      </select>
      </div>
      
      <div class="input-group mb-3">
      <span class="input-group-text" id="peso">Peso</span>
      <input type="text" onChange={valorPeso} class="form-control" id="peso" placeholder="Digita peso mascota" />
      </div>

      <div className="text-center">
      <button className="btn btn-lg btn-primary fw-bolder" onClick={Calcular}>Calcular</button>
      </div>
      
      </div>
      
      </div>
    // </>
  );
};

export default PesoMascotas;
