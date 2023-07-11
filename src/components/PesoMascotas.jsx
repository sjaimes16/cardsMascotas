import React, {useState} from 'react'
import Navbar from './Navbar';

const PesoMascotas = () => {
    const [animal, setAnimal] = useState('');
    const [cantidad, setCantidad] = useState('-');
    const [alimento, setAlimento] = useState('-');
    const [peso, setPeso] = useState('-');
    const [tablaConversion, setTablaConversion] = useState({
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
    });
  
    const [nuevoAlimento, setNuevoAlimento] = useState('');
    const [nuevasProporciones, setNuevasProporciones] = useState('');
  
    function Calcular() {
        console.log(tablaConversion)
      let total = '';
      const animalData = tablaConversion[animal];
      if (animalData) {
        const alimentoData = animalData[alimento];
        if (alimentoData) {
          for (const [key, value] of Object.entries(alimentoData)) {
            if (key < peso) {
              total = value;
            }
          }
        }
      }
  
      setCantidad(total);
    }
  
    function eleccionAnimal(e) {
      const animal = e.target.value;
      setAnimal(animal);
    }
  
    function handleNuevoAlimento(e) {
      const nuevoAlimento = e.target.value;
      setNuevoAlimento(nuevoAlimento);
    }
  
    function handleNuevasProporciones(e) {
      const nuevasProporciones = e.target.value;
      setNuevasProporciones(nuevasProporciones);
    }
  
    function handleGuardar(e) {
      e.preventDefault(); 
  
      // Validar que se haya ingresado un nuevo alimento y las nuevas proporciones
      if (nuevoAlimento.trim() === '' || nuevasProporciones.trim() === '') {
        return;
      }
  
      // Convertir las proporciones a un objeto con una única clave-valor
      const proporcionesObj = parseProporciones(nuevasProporciones);
  
      // Actualizar el estado tablaConversion con los nuevos datos ingresados, prevTabla es para acceder al valor anterior
      setTablaConversion((prevTabla) => {
        const animalData = prevTabla[animal];
        if (animalData) {
          return {
            ...prevTabla,
            [animal]: {
              ...animalData,
              [nuevoAlimento]: proporcionesObj,
            },
          };
        }
        return prevTabla;
      });
  
      // Limpiar los campos del formulario después de guardar los datos
      setNuevoAlimento('');
      setNuevasProporciones('');
    }
  
    function parseProporciones(proporciones) {
      const proporcionesArray = proporciones.split('-');
      const min = parseInt(proporcionesArray[0]);
      const max = parseInt(proporcionesArray[1]);
      const proporcionesObj = {};
  
      for (let i = min; i <= max; i++) {
        proporcionesObj[i] = `${i}-${i + 5}`;
      }
  
      return proporcionesObj;
    }
  
    function valorPeso(e) {
      const peso = e.target.value;
      setPeso(peso);
    }
  
    function eleccionComida(e) {
      const eleccion = e.target.value;
      setAlimento(eleccion);
    }
  
    function getMascotaOptions() {
      let options = [];
      for (const [key, value] of Object.entries(tablaConversion)) {
        options.push(
          <option value={key} key={key}>
            {key}
          </option>
        );
      }
  
      return options;
    }
  
    function getComidaOptions() {
      let comidaSet = new Set();
  
      for (const [key, value] of Object.entries(tablaConversion.perro)) {
        comidaSet.add(key);
      }
  
      for (const [key, value] of Object.entries(tablaConversion.gato)) {
        comidaSet.add(key);
      }
  
      let comida = Array.from(comidaSet).map((key) => (
        <option value={key} key={key}>
          {key}
        </option>
      ));
  
      return comida;
    }

    return (
        <>
        <Navbar />
          <h2>TABLA MASCOTA</h2>
          <p className="text-center">
            Elige el tipo de alimento, tipo de mascota y digita el peso. Presiona calcular
          </p>
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
                {getComidaOptions()}
              </select>
            </div>
            <div className="col-6">
              <select onChange={eleccionAnimal} className="form-select mb-3">
                <option selected>Elige un tipo de mascota</option>
                {getMascotaOptions()}
              </select>
            </div>
    
            <div className="input-group mb-3">
              <span className="input-group-text" id="peso">
                Peso
              </span>
              <input
                type="text"
                onChange={valorPeso}
                className="form-control"
                id="peso"
                placeholder="Digita peso mascota"
              />
            </div>
    
            <div className="text-center">
              <button className="btn btn-lg btn-primary fw-bolder" onClick={Calcular}>
                Calcular
              </button>
            </div>
          </div>
    
          <p className="text-center">Formulario</p>
          <form>
            <select onChange={eleccionAnimal} className="form-select mb-3">
              <option selected>Elige un tipo de mascota</option>
              {getMascotaOptions()}
            </select>
            <label>Escriba el nuevo alimento</label>
            <input
              type="text"
              value={nuevoAlimento}
              onChange={handleNuevoAlimento}
              className="form-control"
            />
    
            <label>Escriba las proporciones</label>
            <input
              value={nuevasProporciones}
              onChange={handleNuevasProporciones}
              className="form-control"
            />
    
            <button className="btn btn-primary" onClick={handleGuardar}>
              Guardar
            </button>
          </form>
        </>
      );
};

export default PesoMascotas;
