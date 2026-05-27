Variables Modernas y Almacenamiento 
const: Guarda un valor que no se puede cambiar.

const pi = 3.1416;
const miNombre = "Carlos";
let: Permite cambiar su valor mas adelante (un contado por ejemplo).

let puntaje = 0;
puntaje = 10; // Ahora vale 10.

 ----- CODIGO DE EJEMPLO -----
const nombre = 'Alex'; // No cambia 
let energia = 100; // Puede subir o bajar

energia = 90; // Permitido
nombre = "Chris"; // Error 


OBJETOS Y ARRAYS

Objeto {}: guardan datos etiquetados con nombre, bueno para describir algo(usuario o un producto)

const telefono = {
  procesador: "Redragon 888";
  salud-bateria: 80;
  ram: "8gb";
};

Array []: guardan datos de una lista como una de compras o cantidad de asientos

const asientos = ["ocupado", "disponible", "ocupado", "disponible", "ocupado"];

OBJETOS Y ARRAYS CON const:
Al guardar un objeto o un array en un 'const', se puede cambiar lo que hay dentro pero no transformarlo completamente en otra cosa

const usuario = {
  nombre: "Alex";
  puntos: "10";
};
// Modificar una propiedad SI esta permitido
usuario.puntos = 15;
// Intentar cmabiar el objeto entero NO esta permitido
usuario = { nombre: "Chris" }; // Error

Codigo de EJEMPLO: Gimnasio
 const gimnasio {
  nombre: Titans Gym;
};
  const sociosInscriptos = ["Juan", "Pedro", "Emanuel", "Gaby", "Carla"];
  let personasEntrenando = 20;

y si ahora se suma "Lucas"?

Codigo de EJEMPLO: Gimnasio
 const gimnasio {
  nombre: Titans Gym;
};
  const sociosInscriptos = ["Juan", "Pedro", "Emanuel", "Gaby", "Carla"];
  let personasEntrenando = 20

  sociosInscriptos.push("Lucas");
  personasEntrenando = personanasEntrenando + 1;

y si ahora sacamos a "Lucas"?

Codigo de EJEMPLO: Gimnasio
 const gimnasio {
  nombre: Titans Gym;
};
  const sociosInscriptos = ["Juan", "Pedro", "Emanuel", "Gaby", "Carla"];
  let personasEntrenando = 20

  sociosInscriptos.push("Lucas");
  personasEntrenando = personanasEntrenando - 1;



