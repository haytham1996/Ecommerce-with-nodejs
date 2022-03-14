import express from 'express'
import { getOrder, updateOrder, deleteOrder, getOrders, createOrder, getMyOrders } from '../controllers/OrderController'
import { authorize } from '../middlewares/auth'
import { AUTH_ROLES } from '../models/Enum'

const router = express.Router()

router.get('/all', authorize(AUTH_ROLES.ADMIN), getOrders)
router.get('/:id', authorize(AUTH_ROLES.ADMIN), getOrder)
router.post('/', authorize(AUTH_ROLES.USER, AUTH_ROLES.ADMIN), createOrder)
router.put('/:id',authorize(AUTH_ROLES.USER), updateOrder)
router.delete('/:id',authorize(AUTH_ROLES.ADMIN), deleteOrder)
router.get('/my/orders',authorize(AUTH_ROLES.USER), getMyOrders)


export default router
