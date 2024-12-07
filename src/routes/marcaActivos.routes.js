import {Router} from 'express'
import { getMarcaActivos } from '../controllers/marcaActivo.controllers.js';

const router = Router()

router.get('/marcaActivos', getMarcaActivos);

export default router 
