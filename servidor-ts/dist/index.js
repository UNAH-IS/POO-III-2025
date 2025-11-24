"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Servidor express
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const data_1 = require("./data");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json()); // Middleware para llenar el objeto req.body
//Endpoint
app.get('/', (peticion, respuesta) => {
    respuesta.send('Hola mundo');
});
app.get('/mensaje/:texto', (peticion, respuesta) => {
    respuesta.send(`El mensaje es: ${peticion.params.texto}`);
});
app.post('/', (peticion, respuesta) => {
    respuesta.send('Esta es una peticion post, usualemtne se usa para crear recursos');
});
//Endpoint para obtener todos los usuarios
app.get('/usuarios', (req, res) => {
    res.send(data_1.usuarios);
});
//Endpoint para obtener un usuario
app.get('/usuarios/:id', (req, res) => {
    const usuario = data_1.usuarios.find(u => u.id === parseInt(req.params.id));
    if (usuario) {
        res.send(usuario);
    }
    else {
        res.send(`El usuario con el id ${req.params.id} no fue encontrado`);
    }
});
//Endpoint para crear un usuario
app.post('/usuarios', (req, res) => {
    const u = {
        id: data_1.usuarios.length + 1,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        constrasena: req.body.constrasena,
        edad: req.body.edad
    };
    data_1.usuarios.push(u);
    res.send(u);
});
//Endpoint para actualizar un usuario
app.put('/usuarios/:id', (req, res) => {
    const usuario = data_1.usuarios.find(u => u.id === parseInt(req.params.id));
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
app.delete('/usuarios/:id', (req, res) => {
    const index = data_1.usuarios.findIndex(u => u.id === parseInt(req.params.id));
    if (index !== -1) {
        data_1.usuarios.splice(index, 1);
        res.send(`Usuario con id ${req.params.id} eliminado`);
    }
    else {
        res.send(`El usuario con el id ${req.params.id} no fue encontrado`);
    }
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`El servidor esta ejecutandose en el puesto ${PORT}`);
});
//# sourceMappingURL=index.js.map