import { Request, Response } from 'express';
import { categorias } from '../data';

export const obtenerCategorias = (req: Request, res: Response) => {
    const categoriasResumen = categorias.map(c => {
        return {
            id: c.id,
            nombre: c.nombre,
            icono: c.icono,
            color: c.color
        }
    });
    res.send(categoriasResumen);
}

export const obtenerPreguntasCategoria = (req: Request, res: Response) => {
    const idCategoria = req.params.id;
    const categoria = categorias.find(c => c.id === parseInt(idCategoria));
    if (categoria) {
        res.send({
            preguntas: categoria.preguntas,
            codigoResultado: 0,
            mensaje: `Preguntas de la categoria con ID: ${idCategoria} obtenidas exitosamente`
        });
    } else {
        res.status(404).send({
            codigoResultado: 1,
            mensaje: `Categoria con ID: ${idCategoria} no encontrada`
        });
    }
};

export const obtenerPregunta = (req: Request, res: Response) => {
    const categoria = categorias.find(c => c.id === parseInt(req.params.idCategoria));
    const pregunta = categoria?.preguntas.find(p => p.id === parseInt(req.params.idPregunta));
    if (pregunta) {
        res.send({
            pregunta, //pregunta: pregunta
            codigoResultado: 0,
            mensaje: `Pregunta con ID: ${req.params.idPregunta} obtenida exitosamente`
        });
    } else {
        res.status(404).send({
            codigoResultado: 1,
            mensaje: `Pregunta con ID: ${req.params.idPregunta} no encontrada`
        });
    }
};