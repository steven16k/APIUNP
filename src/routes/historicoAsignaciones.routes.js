import {Router} from 'express'
import {  getHistoricoAsignaciones } from '../controllers/historicoAsignaciones.controllers.js';

const router = Router()

router.get('/historicoAsignaciones', getHistoricoAsignaciones);

export default router