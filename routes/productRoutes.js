import express from 'express'
import { createProduct, deleteProduct, getMyProducts, getProduct, getProducts, updateProduct } from '../controllers/ProductController'
import { AUTH_ROLES } from '../models/Enum'
import { authorize } from '/users/haytham/desktop/ala/ecommerce-api/middlewares/auth'

const router = express.Router()

router.get('/all', getProducts)
router.get('/:id', getProduct)
router.post('/',authorize(AUTH_ROLES.SELLER), createProduct)
router.put('/:id',authorize(AUTH_ROLES.SELLER), updateProduct)
router.delete('/:productId',authorize(AUTH_ROLES.SELLER), deleteProduct)
router.get('/my/products',authorize(AUTH_ROLES.SELLER), getMyProducts)


export default router
