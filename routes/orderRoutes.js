import express from 'express'
import { getOrder, updateOrder, deleteOrder, getOrders, createOrder, getMyOrders } from '../controllers/OrderController'

const router = express.Router({caseSensitive: true})

router.get('/all', getOrders)
router.get('/:id', getOrder)
router.post('/', createOrder)
router.put('/:id', updateOrder)
router.delete('/:id', deleteOrder)
router.get('/my/orders', getMyOrders)


export default router
