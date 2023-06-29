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

export const ESPECIES = ["Perro", "Gato", "Conejo", "Pájaro", "Tortuga"];

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
  const nombres = ["Danna", "Bambi", "Lucas", "Toby", "Simba", "Thor", "Max", "Linda", "Chispa", "Luna"];
  const sexos = ["Macho", "Hembra"];
  const dataPersona = generarDataPersona();

  const dataMascota = [];
  for (let i = 0; i < cantidadMascotas && i < dataPersona.length; i++) {
    const nombreMascota = nombres[Math.floor(Math.random() * nombres.length)];
    const especie = ESPECIES[Math.floor(Math.random() * ESPECIES.length)];
    const id_dueño = dataPersona[i].id;
    const sexo = sexos[Math.floor(Math.random() * sexos.length)];
    dataMascota.push({ nombreMascota, especie, id_dueño, sexo });
  }

  return dataMascota;
}

function generarUbicaciones(cantidad) {
    const direcciones = [
      "123 Calle Principal",
      "456 Avenida Central",
      "789 Calle Secundaria",
      "321 Avenida Principal",
      "654 Calle Central",
      "Calle 11 a",
      "Carrera 1a",
    ];
  
    const ubicaciones = [];
  
    for (let i = 0; i < cantidad; i++) {
      const indice = Math.floor(Math.random() * direcciones.length);
      const direccion = direcciones[indice];
  
      ubicaciones.push(direccion);
    }
  
    return ubicaciones;
  }  
  
  function generarTestimonios(cantidad) {
    const testimonios = [
      "El equipo de la veterinaria es increíble. Siempre cuidan de mis mascotas y les brindan el mejor tratamiento posible. ¡Recomendado!",
      "No puedo estar más agradecido con la veterinaria. Han salvado la vida de mi perro en una situación de emergencia. Son los mejores.",
      "Siempre me siento bienvenido en la veterinaria. El personal es amable y atento, y se nota que aman a los animales. Excelente servicio.",
      "Mi gato es muy difícil de tratar, pero en la veterinaria siempre lo manejan con paciencia y cuidado. Los profesionales son expertos en lo que hacen.",
      "Llevo a mis mascotas a la veterinaria desde hace años y nunca me han decepcionado. Siempre brindan un excelente cuidado y atención veterinaria.",
      "Estoy muy contento con el servicio que ofrece la veterinaria. Son compasivos, conocedores y siempre responden a todas mis preguntas. Los recomendaría sin dudarlo."
    ];
  
    const testimoniosGenerados = [];
  
    for (let i = 0; i < cantidad; i++) {
      const indice = Math.floor(Math.random() * testimonios.length);
      const testimonio = testimonios[indice];
  
      testimoniosGenerados.push(testimonio);
    }
  
    return testimoniosGenerados;
  }
  
  

export const dataPersona = generarDataPersona();
export const dataMascota = generarDataMascota(10);
export const direccionesGeneradas = generarUbicaciones(5);
export const testimoniosGenerados = generarTestimonios(5);