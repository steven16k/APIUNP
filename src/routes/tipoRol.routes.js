import {Router} from 'express'
import { getTipoRol } from '../controllers/tipoRol.controllers.js';

const router = Router()

router.get('/usuarioTipoRol', getTipoRol);

export default router