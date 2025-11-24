import { Router } from "express";
import { actualizarResultadoUsuario, actualizarUsuario, eliminarUsuario, guardarUsuario, obtenerUsuario, obtenerUsuarios } from "../controllers/usuarios.controller";

const router:Router = Router();

router.get('/', obtenerUsuarios);
router.get('/:id', obtenerUsuario);
router.post('/', guardarUsuario);
router.put('/:id', actualizarUsuario);
router.delete('/:id', eliminarUsuario);
router.patch('/:idUsuario/resultados/:idCategoria', actualizarResultadoUsuario);

export default router;