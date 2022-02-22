import expres from "express"
import { registerUser, loginUser } from "../controllers/userController"

const router = expres()

router.post('/register', registerUser)
router.post('/login', loginUser)

export default router