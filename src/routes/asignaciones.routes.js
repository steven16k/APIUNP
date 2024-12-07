import {Router} from 'express'
import { getAsignaciones } from '../controllers/asignaciones.controllers.js';

const router = Router()

router.get('/asignaciones', getAsignaciones);

export default router 
