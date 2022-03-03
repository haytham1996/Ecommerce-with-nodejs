import express from 'express'
import { deleteUser, getAllUsers, getUser, updateUser } from '../controllers/userController'
import { AUTH_ROLES } from '../models/Enum'
import { authorize } from '/users/haytham/desktop/ala/ecommerce-api/middlewares/auth'

const router = express.Router()

router.put('/update', updateUser)
router.delete('/delete/:id',authorize(AUTH_ROLES.ADMIN), deleteUser)
router.get('/all', authorize(AUTH_ROLES.ADMIN), getAllUsers)
router.get('/:id', getUser)

export default router