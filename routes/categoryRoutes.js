import express from 'express'
import {getCategory, updateCategory, deleteCategory, getAllCategories, createCategory } from '../controllers/categoryController'
import { authorize } from '../middlewares/auth'
import { AUTH_ROLES } from '../models/Enum'

const router = express.Router()

router.post('/', createCategory)
router.get('/all', getAllCategories)
router.get('/:id', getCategory)
router.put('/:id',authorize(AUTH_ROLES.ADMIN), updateCategory)
router.delete('/:id',authorize(AUTH_ROLES.USER, AUTH_ROLES.ADMIN), deleteCategory)

export default router
