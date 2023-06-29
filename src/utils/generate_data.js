const personas = [
    { id: 3, nombre: 'Sonia', edad: 40, numeroMascotas: 3 },
    { id: 2, nombre: 'Valentina', edad: 30, numeroMascotas: 3 },
    { id: 7, nombre: 'Carlos', edad: 55, numeroMascotas: 4 },
    { id: 4, nombre: 'Laura', edad: 47, numeroMascotas: 4 },
    { id: 6, nombre: 'Andrés', edad: 66, numeroMascotas: 3 },
    { id: 1, nombre: 'Natalia', edad: 42, numeroMascotas: 2 },
    { id: 9, nombre: 'Saray', edad: 52, numeroMascotas: 4 },
    { id: 8, nombre: 'María', edad: 30, numeroMascotas: 2 },
    { id: 5, nombre: 'Camila', edad: 25, numeroMascotas: 3 },
    { id: 10, nombre: 'Valentina', edad: 30, numeroMascotas: 3 },
  ];
  
  function generarDataPersona() {
    const dataPersona = [];
    for (let i = 0; i < personas.length; i++) {
      const persona = personas[i];
      const id = persona.id;
      const nombre = persona.nombre;
      const edad = persona.edad;
      const numeroMascotas = Math.floor(Math.random() * 6);
      dataPersona.push({ id, nombre, edad, numeroMascotas });
    }
  
    return dataPersona;
  }
  
  function generarDataMascota(cantidadMascotas) {
    const especies = ["Perro", "Gato", "Conejo", "Pájaro", "Tortuga"];
    const nombres = ["Danna", "Bambi", "Lucas", "Toby", "Simba", "Thor", "Max", "Linda", "Chispa", "Luna"];
    const sexos = ["Macho", "Hembra"];
    const dataPersona = generarDataPersona();
  
    const dataMascota = [];
    for (let i = 0; i < cantidadMascotas && i < dataPersona.length; i++) {
      const nombreMascota = nombres[Math.floor(Math.random() * nombres.length)];
      const especie = especies[Math.floor(Math.random() * especies.length)];
      const id_dueño = dataPersona[i].id;
      const sexo = sexos[Math.floor(Math.random() * sexos.length)];
      dataMascota.push({ nombreMascota, especie, id_dueño, sexo });
    }
  
    return dataMascota;
  }

  const dataPersona = generarDataPersona();
  const dataMascota = generarDataMascota(10);
  export default (dataMascota, dataPersona)
