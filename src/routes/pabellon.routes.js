import {Router} from 'express'
import { getPabellon } from '../controllers/pabellon.controllers.js';

const router = Router()

router.get('/pabellon', getPabellon);

export default router 