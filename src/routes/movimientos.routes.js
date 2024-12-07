import {Router} from 'express'
import { getMovimientos } from '../controllers/movimientos.controllers.js';

const router = Router()

router.get('/movimientos', getMovimientos);

export default router