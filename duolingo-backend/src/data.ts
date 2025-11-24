import { Categoria } from "./models/categoria.model";
import { Usuario } from "./models/usuario.model";

export const categorias:Array<Categoria> = [
  {
    id: 1,
    nombre: "Family",
    icono: "fa-solid fa-people-roof",
    color: "#6000fbff",
    preguntas: [
      {
        id: 1,
        palabra: "Hermana",
        respuestas: [
          {
            palabra: "Brother",
            correcta: false,
          },
          {
            palabra: "Mother",
            correcta: false,
          },
          {
            palabra: "Water",
            correcta: false,
          },
          {
            palabra: "Sister",
            correcta: true,
          },
        ],
      },
      {
        id: 2,
        palabra: "Familia",
        respuestas: [
          {
            palabra: "Family",
            correcta: true,
          },
          {
            palabra: "Mother",
            correcta: false,
          },
          {
            palabra: "Water",
            correcta: false,
          },
          {
            palabra: "Java",
            correcta: false,
          },
        ],
      },
      {
        id: 3,
        palabra: "Padre",
        respuestas: [
          {
            palabra: "Father",
            correcta: true,
          },
          {
            palabra: "Mother",
            correcta: false,
          },
          {
            palabra: "Water",
            correcta: false,
          },
          {
            palabra: "Java",
            correcta: false,
          },
        ],
      },
      {
        id: 4,
        palabra: "Hijo",
        respuestas: [
          {
            palabra: "Son",
            correcta: true,
          },
          {
            palabra: "Daughter",
            correcta: false,
          },
          {
            palabra: "Water",
            correcta: false,
          },
          {
            palabra: "Java",
            correcta: false,
          },
        ],
      },
      {
        id: 5,
        palabra: "Hija",
        respuestas: [
          {
            palabra: "Daughter",
            correcta: true,
          },
          {
            palabra: "Son",
            correcta: false,
          },
          {
            palabra: "Water",
            correcta: false,
          },
          {
            palabra: "Java",
            correcta: false,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    nombre: "Animals",
    icono: "fa-solid fa-paw",
    color: "#F2A900",
    preguntas: [
      {
        id: 1,
        palabra: "Perro",
        respuestas: [
          {
            palabra: "Dog",
            correcta: true,
          },
          {
            palabra: "Cat",
            correcta: false,
          },
          {
            palabra: "Water",
            correcta: false,
          },
          {
            palabra: "Java",
            correcta: false,
          },
        ],
      },
      {
        id: 2,
        palabra: "Gato",
        respuestas: [
          {
            palabra: "Cat",
            correcta: true,
          },
          {
            palabra: "Dog",
            correcta: false,
          },
          {
            palabra: "Water",
            correcta: false,
          },
          {
            palabra: "Java",
            correcta: false,
          },
        ],
      },
      {
        id: 3,
        palabra: "Pájaro",
        respuestas: [
          {
            palabra: "Bird",
            correcta: true,
          },
          {
            palabra: "Dog",
            correcta: false,
          },
          {
            palabra: "Water",
            correcta: false,
          },
          {
            palabra: "Java",
            correcta: false,
          },
        ],
      },
      {
        id: 4,
        palabra: "Pez",
        respuestas: [
          {
            palabra: "Fish",
            correcta: true,
          },
          {
            palabra: "Dog",
            correcta: false,
          },
          {
            palabra: "Water",
            correcta: false,
          },
          {
            palabra: "Java",
            correcta: false,
          },
        ],
      },
      {
        id: 5,
        palabra: "Caballo",
        respuestas: [
          {
            palabra: "Horse",
            correcta: true,
          },
          {
            palabra: "Dog",
            correcta: false,
          },
          {
            palabra: "Water",
            correcta: false,
          },
          {
            palabra: "Java",
            correcta: false,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    nombre: "Events",
    icono: "fa-solid fa-calendar-days",
    color: "#56C2A1",
    preguntas: [
      {
        id: 1,
        palabra: "Cumpleaños",
        respuestas: [
          {
            palabra: "Birthday",
            correcta: true,
          },
          {
            palabra: "Aniversario",
            correcta: false,
          },
          {
            palabra: "Fiesta",
            correcta: false,
          },
          {
            palabra: "Regalo",
            correcta: false,
          },
        ],
      },
      {
        id: 2,
        palabra: "Navidad",
        respuestas: [
          {
            palabra: "Christmas",
            correcta: true,
          },
          {
            palabra: "Easter",
            correcta: false,
          },
          {
            palabra: "Halloween",
            correcta: false,
          },
          {
            palabra: "Thanksgiving",
            correcta: false,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    nombre: "Food",
    icono: "fa-solid fa-burger",
    color: "#91C46C",
    preguntas: [
      {
        id: 1,
        palabra: "Manzana",
        respuestas: [
          {
            palabra: "Apple",
            correcta: true,
          },
          {
            palabra: "Banana",
            correcta: false,
          },
          {
            palabra: "Orange",
            correcta: false,
          },
          {
            palabra: "Grapes",
            correcta: false,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    nombre: "Colors",
    icono: "fa-solid fa-palette",
    color: "#D16A9A",
    preguntas: [
      {
        id: 1,
        palabra: "Rojo",
        respuestas: [
          {
            palabra: "Red",
            correcta: true,
          },
          {
            palabra: "Blue",
            correcta: false,
          },
          {
            palabra: "Green",
            correcta: false,
          },
          {
            palabra: "Yellow",
            correcta: false,
          },
        ],
      },
    ],
  }
];

export const usuarios: Array<Usuario> = [
  {
    id: 1,
    nombre: "Goku",
    imagenPerfil: "profile-pics/goku.jpg",
    coronas: 2,
    vidas: 5,
    resultados: [
      {
        category: 1,
        correctas: 4,
        incorrectas: 1,
        aprobada: false,
      },
      {
        category: 2,
        correctas: 5,
        incorrectas: 0,
        aprobada: true,
      },
      {
        category: 3,
        correctas: 5,
        incorrectas: 0,
        aprobada: true,
      },
      // ...
    ],
  },
  {
    id: 2,
    nombre: "Vegeta",
    imagenPerfil: "profile-pics/vegeta.jpg",
    coronas: 3,
    vidas: 4,
    resultados: [
        {
        category: 1,
        correctas: 5,
        incorrectas: 0,
        aprobada: true,
      },
      {
        category: 2,
        correctas: 4,
        incorrectas: 1,
        aprobada: false,
      },
      {
        category: 3,
        correctas: 4,
        incorrectas: 1,
        aprobada: false,
      },
    ],
  },
  {
    id: 3,
    nombre: "Krillin",
    imagenPerfil: "profile-pics/krilin.jpg",
    coronas: 3,
    vidas: 4,
    resultados: [
      {
        category: 1,
        correctas: 5,
        incorrectas: 0,
        aprobada: true,
      },
      {
        category: 2,
        correctas: 5,
        incorrectas: 0,
        aprobada: true,
      },
      {
        category: 3,
        correctas: 5,
        incorrectas: 0,
        aprobada: true,
      },
    ],
  },
  {
    id: 4,
    nombre: "Nappa",
    imagenPerfil: "profile-pics/nappa.jpg",
    coronas: 3,
    vidas: 4,
    resultados: [
      {
        category: 1,
        correctas: 5,
        incorrectas: 0,
        aprobada: true,
      },
      {
        category: 2,
        correctas: 5,
        incorrectas: 0,
        aprobada: true,
      },
      {
        category: 3,
        correctas: 5,
        incorrectas: 0,
        aprobada: true,
      },
    ],
  },
  {
    id: 5,
    nombre: "Freezer",
    imagenPerfil: "profile-pics/freezer.jpg",
    coronas: 3,
    vidas: 4,
    resultados: [
      {
        category: 1,
        correctas: 5,
        incorrectas: 0,
        aprobada: true,
      },
      {
        category: 2,
        correctas: 5,
        incorrectas: 0,
        aprobada: true,
      },
      {
        category: 3,
        correctas: 5,
        incorrectas: 0,
        aprobada: true,
      },
    ],
  },
  {
    id: 5,
    nombre: "Dende",
    imagenPerfil: "profile-pics/dende.jpg",
    coronas: 3,
    vidas: 4,
    resultados: [
      {
        category: 1,
        correctas: 5,
        incorrectas: 0,
        aprobada: true,
      },
      {
        category: 2,
        correctas: 5,
        incorrectas: 0,
        aprobada: true,
      },
      {
        category: 3,
        correctas: 5,
        incorrectas: 0,
        aprobada: true,
      },
    ],
  },
];