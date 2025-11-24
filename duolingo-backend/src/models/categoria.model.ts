export interface Categoria {
    id: number;
    nombre: string;
    icono: string;
    color: string;
    preguntas: Array<Pregunta>;
}

export interface Pregunta  {
        id: number;
        palabra: string;
        respuestas: Array<Respuesta>;
}

export interface Respuesta {
    palabra: string;
    correcta: boolean;
}