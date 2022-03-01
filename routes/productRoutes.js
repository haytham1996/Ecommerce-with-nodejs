import express from 'express'
import { addProduct, getProduct, updateProduct, deleteProduct, getAllProducts, getProductsByCategory, getProductsByUser } from '../controllers/ProductController'

const router = express.Router({caseSensitive: true})

router.get('/all', getAllProducts)
router.get('/:id', getProduct)
router.post('/', addProduct)
router.put('/:productId', updateProduct)
router.delete('/:productId', deleteProduct)
//router.get('/:categoryId/', getProductsByCategory)
//router.get('/:userId', getProductsByUser)


export default router
