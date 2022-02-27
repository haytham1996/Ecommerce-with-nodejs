import expres from "express"
import { registerUser, loginUser, loginAdmin } from "../controllers/userController"

const router = expres()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/admin', loginAdmin)

export default router