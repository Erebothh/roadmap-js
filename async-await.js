async: Se coloca antes de la funcion para decir que la misma funcion va a realizar tareas que toman tiempo
await: Tambien se coloca antes de la peticion, le dice a JS, que espere que el servidor responda para pasar a la otra linea.

  // async prepara la funcion
  async function obtenerEntrenadores() {
    // await pausa la ejecucion hasta que los datos terminen de descargarse
    const respuesta = await fetch("https://api.titansgym.com/entrenadores");
    const datos = await repuesta.json(); // convierte la respuesta en un objeto ejecutable

    return datos;
}

// pueba: aplicacion de clima para el gimnasio 
  // preparamos la funcion con async porque vamos a hacer una peticion a internet
  async function obtenerClima() {
    // guardamos la url de la api en una constante
      const url = "https://api.open-meteo.com";
    // Hacemos la peticion y esperamos la respuesta del servidor
      const respuesta = await fetch(url);
    // Convertimos la respuesta cruda en un objeto de JS ejecutable 
      const datos = await respuesta.json;
    // Mostramos los datos en la consola para ver que nos devuelve internet
    console.log(datos);
  }
// Llamamos a la función para que se ejecute
obtenerClima();

y si quisieramos obtener un dato concreto 
// preparamos la funcion con async porque vamos a hacer una peticion a internet
  async function obtenerClima() {
    // guardamos la url de la api en una constante
      const url = "https://api.open-meteo.com";
    // Hacemos la peticion y esperamos la respuesta del servidor
      const respuesta = await fetch(url);
// 1. Descargamos los datos completos del servidor y los convertimos a objeto
const datos = await respuesta.json();
// 2. Ahora sí, guardamos solo la temperatura en su propia variable
const temperaturaActual = datos.current_weather.temperature;

// 3. Mostramos el resultado
console.log(temperaturaActual); // Esto mostrará un número como 24.5
