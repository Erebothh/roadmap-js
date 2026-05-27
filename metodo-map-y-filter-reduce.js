metodo map()
 este metodo agarra una lista, transforma cada elemento y entrega una nueva.
EJEMPLO GYM

// esta lista muestra los años de antiguedad de 3 profesores
const antiguedad = [2, 5, 8];

// crear una lista donde a cada profesor se le sume 1 año de antiguedad 
const nuevaAntiguedad = antiguedad.map( anios => anios + 1);

// y si entra un profesor nuevo? 
let antiguedad = 2;
antiguedad++;

METODO filter()
para no modificar todos los elementos de una lista, usamos filter() para quedarnos con los que cumplan una condicion.

// el gimnasio va a dar un bono a cada profesor que tenga mas de 4 años de antiguedad
 const profesoresSueldoConBono = DocsAntiguedad.filter(años => años > 4);

// ejemplo: el gimnasio quiere quedarse unicamente con los clientes mayores de edad

const edades = [14, 25, 17, 32, 16];

  const clientesMayores = edades.filter(años >= años > 18);

METODO reduce()
agarra una lista de muchos valores y la reduce a un solo valor
como por ejemplo saber la edad en total sumada de todos los clientes de la lista

const edades = [14, 25, 17, 32, 16];
// reduce() recibe 2 cosas: el acumulador (la caja donde sumamos) y el elemento actual, y 0 es el valor inicial de la caja 'acumulador'
// 
  const sumaEdades = edades.reduce((acumulador, edad) => acumulador + edad, 0);

Tenemos una lista con los sueldos mensuales de tres entrenadores:
 const sueldos = [1000, 1500, 1200];
Si quisiéramos calcular el gasto total en sueldos del gimnasio usando reduce(), ¿cómo completarías la operación matemática dentro de la función para ir sumando cada sueldo al acumulador?
  const sueldos = [1000, 1500, 1200];
    const sumaSueldos = sueldos.reduce((acumulador, sueldo) => acumulador + sueldo, 0);
