let nombre:string = 'Juan';
let edad:number = 25;
let esEstudiante:boolean = true;
let gustos:string[] = ['programación', 'música', 'deportes'];
let clases: Array<string> = ['Matemáticas', 'Física', 'Programación'];
// let persona:any = {
//     nombre: nombre,
//     edad: edad,
//     esEstudiante: esEstudiante,
//     gustos: gustos,
//     clases: clases
// };

interface Persona { //clase
    nombre: string;
    edad: number;
    esEstudiante: boolean;
}

let persona: Persona;
let persona2: Persona;

persona = {
    nombre: 'Pedro',
    edad: 50,
    esEstudiante: false
};

persona2 = {
    nombre: 'Ana',
    edad: 22,
    esEstudiante: true
};

console.log('Hola ' + nombre + ', tienes ' + edad + ' años.');