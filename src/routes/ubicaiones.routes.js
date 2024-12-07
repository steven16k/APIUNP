import {Router} from 'express'
import { getUbicaciones } from '../controllers/ubicaciones.controllers.js';

const router = Router()

router.get('/ubicaciones', getUbicaciones);

export default router 