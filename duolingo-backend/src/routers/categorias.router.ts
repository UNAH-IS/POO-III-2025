import { Router } from 'express';
import { obtenerCategorias, obtenerPregunta, obtenerPreguntasCategoria } from '../controllers/categorias.controller';

const router: Router = Router();

router.get('/', obtenerCategorias);
router.get('/:id/preguntas', obtenerPreguntasCategoria);
router.get('/:idCategoria/preguntas/:idPregunta', obtenerPregunta);

export default router;
