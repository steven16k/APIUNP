import {Router} from 'express'
import { getGarantias } from '../controllers/garantias.controllers.js';

const router = Router()

router.get('/garantias', getGarantias);

export default router