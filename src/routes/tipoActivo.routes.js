import {Router} from 'express'
import { getTipoActivo } from '../controllers/tipoActivo.controllers.js';

const router = Router()

router.get('/tipoActivos', getTipoActivo);

export default router 