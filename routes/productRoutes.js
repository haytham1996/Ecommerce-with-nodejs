import express from 'express'
import { createProduct, deleteProduct, getMyProducts, getProduct, getProducts, updateProduct } from '../controllers/ProductController'
import { AUTH_ROLES } from '../models/Enum'
import { authorize } from '/users/haytham/desktop/ala/ecommerce-api/middlewares/auth'

const router = express.Router()

router.get('/all', getProducts)
router.get('/:id', getProduct)
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:productId', deleteProduct)
router.get('/my/products', getMyProducts)


export default router
