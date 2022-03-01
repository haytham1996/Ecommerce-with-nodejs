import express from 'express'
import { addOrder, getOrder, updateOrder, deleteOrder, getAllOrders, getOrdersByUser } from '../controllers/OrderController'

const router = express.Router({caseSensitive: true})

router.get('/all', getAllOrders)
router.get('/:id', getOrder)
router.post('/', addOrder)
router.put('/:orderId', updateOrder)
router.delete('/:orderId', deleteOrder)
//router.get('/:userId', getOrdersByUser)


export default router
