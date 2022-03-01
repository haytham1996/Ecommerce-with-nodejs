import express from 'express'
import { addCategory, getCategory, updateCategory, deleteCategory, getAllCategories } from '../controllers/categoryController'

const router = express.Router()

router.get('/all', getAllCategories)
router.get('/:categoryId', getCategory)
router.post('/', addCategory)
router.put('/:categoryId', updateCategory)
// router.put('/image/', categoryImgUpload.single('image'), compressCategoryImage)
router.delete('/:categoryId', deleteCategory)

export default router
