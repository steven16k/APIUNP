import {Router} from 'express'
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/products.controllers.js';

const router = Router()

router.get('/activos', getProducts);

router.get ('/activos/:id', getProduct);

router.post('/activos', createProduct);

router.put('/activos/:id', updateProduct);

router.delete('/activos/:id', deleteProduct);

export default router 