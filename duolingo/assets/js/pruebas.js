console.log( "Hola mundo desde controlador.js" );
// Comentario de una sola linea
/* Comentario
de
varias
lineas
*/

// Declaracion de variables

//var es para variables globales
var nombre = "Juan"; // String

//let es para variables locales
let edad = 30; // Number

// if (x) {
//     let promedio = 80; // Number
//     console.log(promedio);
// }

const PI = 3.1416; // Constante
let esMayor = true; // Boolean
let apellido; // Undefined
let sueldo = null; // Null

// Tipos de datos complejos
let lenguajes = ["JavaScript", "Python", "Java", "C++"]; // Arreglo
let opciones = ["Si", "No", "Tal vez", 1, true, null, undefined, [1,2,3]]; // Arreglo con varios tipos de datos

//Javascript Object Notation (JSON)
let persona1 = {
    nombre: "Ana",
    edad: 25,
    esEstudiante: false,
    lenguajes: ["Ingles", "Frances", "Aleman"],
    direccion: {
        pais: "Honduras",
        ciudad: "Tegucigalpa"
    }
};

let persona2 = {
    nombre: "Luis",
    edad: 28,
    esEstudiante: true,
    lenguajes: ["Italiano", "Portugues"],
    direccion: {
        pais: "Honduras",
        ciudad: "San Pedro Sula"
    }
};

let personas = [persona1, persona2]; // Arreglo de objetos

// persona1.nombre = "Maria";
// persona1.telefono = "9999-9999";

console.log(personas);