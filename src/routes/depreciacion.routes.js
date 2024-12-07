import {Router} from 'express'
import {  getDepreciacion } from '../controllers/depreciacion.controllers.js';

const router = Router()

router.get('/depreciacionActivos', getDepreciacion);

export default router