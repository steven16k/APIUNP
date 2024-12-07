import {Router} from 'express'
import { getColorActivo} from '../controllers/color.controllers.js';

const router = Router()

router.get('/colorActivos', getColorActivo);

export default router 