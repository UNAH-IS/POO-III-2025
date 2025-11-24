//Servidor express
import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import usuariosRouter from './routers/usuarios.router';
import categoriasRouter from './routers/categorias.router';
import cors from 'cors';

dotenv.config();

const app: Application = express();

app.use(cors()); //Habilitar CORS para todas las rutas
app.use(express.json()); // Middleware para llenar el objeto req.body
app.use("/usuarios", usuariosRouter);
app.use("/categorias", categoriasRouter);
//...Otras rutas

app.get('/', (req: Request, res: Response) => {
  res.send('Hola Mundo desde Express con TypeScript');
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`El servidor esta ejecutandose en el puesto ${PORT}`);
});
