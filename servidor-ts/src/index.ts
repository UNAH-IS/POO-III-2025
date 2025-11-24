//Servidor express
import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import { usuarios } from './data';
import { Usuario } from './data';

dotenv.config();

const app: Application = express();

app.use(express.json()); // Middleware para llenar el objeto req.body

//Endpoint
app.get('/', (peticion: Request, respuesta: Response) => {
  respuesta.send('Hola mundo');
});

app.get('/mensaje/:texto', (peticion: Request, respuesta: Response) => {
    respuesta.send(`El mensaje es: ${peticion.params.texto}`);
});

app.post('/', (peticion: Request, respuesta: Response) => {
  respuesta.send('Esta es una peticion post, usualemtne se usa para crear recursos');
});

//Endpoint para obtener todos los usuarios
app.get('/usuarios', (req: Request, res: Response) => {
    res.send(usuarios);
});

//Endpoint para obtener un usuario
app.get('/usuarios/:id', (req: Request, res: Response) => {
    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    if (usuario) {
        res.send(usuario);
    } else {
        res.send(`El usuario con el id ${req.params.id} no fue encontrado`);
    }
});

//Endpoint para crear un usuario
app.post('/usuarios', (req: Request, res: Response) => {
    const u:Usuario = {
        id: usuarios.length + 1,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        constrasena: req.body.constrasena,
        edad: req.body.edad
    };

    usuarios.push(u);
    res.send(u);
});

//Endpoint para actualizar un usuario
app.put('/usuarios/:id', (req: Request, res: Response) => {
    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));

    if (usuario) {
        usuario.nombre = req.body.nombre ?? usuario.nombre;
        usuario.apellido = req.body.apellido ?? usuario.apellido;
        usuario.correo = req.body.correo ?? usuario.correo;
        usuario.constrasena = req.body.constrasena ?? usuario.constrasena;
        usuario.edad = req.body.edad ?? usuario.edad;
    }
    res.send(usuario);
});

//Endpoint para eliminar un usuario
app.delete('/usuarios/:id', (req: Request, res: Response) => {
    const index = usuarios.findIndex(u => u.id === parseInt(req.params.id));
    if (index !== -1) {
        usuarios.splice(index, 1);
        res.send(`Usuario con id ${req.params.id} eliminado`);
    } else {
        res.send(`El usuario con el id ${req.params.id} no fue encontrado`);
    }
});


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`El servidor esta ejecutandose en el puesto ${PORT}`);
});
