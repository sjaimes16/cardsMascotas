import React, {useState} from 'react'
import Navbar from './Navbar';

const PesoMascotas = () => {
  const [tipoAlimento, setTipoAlimento] = useState('');
  const [pesoMascota, setPesoMascota] = useState('');
  const [cantidadAlimento, setCantidadAlimento] = useState('');
  const [tablaDatos, setTablaDatos] = useState([]);

  const tablaConversion = {
    dogChow: 0.02,
    nucan: 0.03,
    pedigree: 0.04
  };

  const handleTipoAlimentoChange = (event) => {
    setTipoAlimento(event.target.value);
  };

  const handlePesoMascotaChange = (event) => {
    setPesoMascota(event.target.value);
  };

  const handleCalcularClick = () => {
    const factorConversion = tablaConversion[tipoAlimento];
    const cantidadCalculada = factorConversion * pesoMascota;

    setCantidadAlimento(cantidadCalculada.toFixed(2));

    // Guardar los datos en la tabla
    const datos = {
      tipoAlimento,
      pesoMascota,
      cantidadAlimento: cantidadCalculada.toFixed(2)
    };
    setTablaDatos([...tablaDatos, datos]);
  };

  return (
    <>
      <Navbar />
      <h1>Calculadora de Alimento</h1>
      <div>
        <p>Tipo de alimento:</p>
        <select className="form-select" value={tipoAlimento} onChange={handleTipoAlimentoChange}>
          <option value="">Seleccione un tipo</option>
          <option value="dogChow">Dog Chow</option>
          <option value="nucan">Nucan</option>
          <option value="pedigree">Pedigree</option>
        </select>
      </div>
      <div>
        <p>Peso de la mascota:</p>
        <input type="number" className="form-control" value={pesoMascota} onChange={handlePesoMascotaChange} />
      </div>
      <div>
        <button className="btn btn-primary mt-3" onClick={handleCalcularClick}>Calcular</button>
      </div>
      {cantidadAlimento && (
        <div >
          <p>Cantidad de alimento a proporcionar: {cantidadAlimento} kg</p>
        </div>
      )}
      {tablaDatos.length > 0 && (
        <div>
          <h2>Tabla de datos:</h2>
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Tipo de alimento</th>
                <th>Peso de la mascota</th>
                <th>Cantidad de alimento</th>
              </tr>
            </thead>
            <tbody>
              {tablaDatos.map((datos, index) => (
                <tr key={index}>
                  <td>{datos.tipoAlimento}</td>
                  <td>{datos.pesoMascota}</td>
                  <td>{datos.cantidadAlimento} kg</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default PesoMascotas;
