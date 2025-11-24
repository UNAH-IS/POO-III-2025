import { Request, Response } from "express";
import { usuarios } from "../data";

export const obtenerUsuarios = (req: Request, res: Response) => {
    const usuariosResumen = usuarios.map(u => {
        return {
            id: u.id,
            nombre: u.nombre,
            imagenPerfil: u.imagenPerfil
        };
    });
    res.send(usuariosResumen);
}

export const obtenerUsuario = (req: Request, res: Response) => {
    const id = req.params.id;
    const usuario = usuarios.find(u => u.id === parseInt(id));
    if (usuario) {
        return res.send({
            usuario: usuario,
            codigoResultado: 0,
            mensaje: `Usuario con ID: ${id} encontrado exitosamente`
        });
    } else {
        res.status(404).send(
            {
                codigoResultado: 1,
                mensaje: `Usuario con ID: ${id} no encontrado`
            });
    }
}

export const guardarUsuario = (req: Request, res: Response) => {
    res.send('Guardar usuario');
}

export const actualizarUsuario = (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(`Actualizar usuario con ID: ${id}`);
}

export const eliminarUsuario = (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(`Eliminar usuario con ID: ${id}`);
}

export const actualizarResultadoUsuario = (req: Request, res: Response) => {
    const usuario = usuarios.find(u => u.id === parseInt(req.params.idUsuario));
    const resultado = usuario?.resultados.find(r => r.category === parseInt(req.params.idCategoria));
    if (!usuario) {
        return res.status(404).send({
            codigoResultado: 1,
            mensaje: `Usuario con ID: ${req.params.idUsuario} no encontrado`
        });
    }
    if (resultado) {
        resultado.correctas = req.body.correctas;
        resultado.incorrectas = req.body.incorrectas;
        resultado.aprobada = req.body.aprobada;
    } else {
        usuario.resultados.push({
            category: parseInt(req.params.idCategoria),
            correctas: req.body.correctas,
            incorrectas: req.body.incorrectas,
            aprobada: req.body.aprobada
        });
    }
    res.send({
        codigoResultado: 0,
        mensaje: `Resultados de la categoria con ID: ${req.params.idCategoria} actualizados para el usuario con ID: ${req.params.idUsuario} exitosamente`
    });
}