import {Router} from 'express'
import { getDepartamentos} from '../controllers/departamento.controllers.js';

const router = Router()

router.get('/departamentos', getDepartamentos);

export default router 