export interface Usuario {
    id: number;
    nombre: string;
    imagenPerfil: string;
    coronas: number;
    vidas: number;
    resultados: Array<Resultado>;
}

export interface Resultado {
    category: number;
    correctas: number;
    incorrectas: number;
    aprobada: boolean;
}