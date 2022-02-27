import express, { Router } from 'express'
import userRouter from './userRoutes'
import authRouter from './authRoutes'
import { verifyJWT } from '../middlewares/verifyJWT'


const appRoutes = express() 


appRoutes.use('/auth/', authRouter)
appRoutes.use(verifyJWT)
appRoutes.use('/user/', userRouter)

export const router = Router()
router.get('/', (req, res) => {
  res.send('API is working properly')
})

appRoutes.use('/', router)

export default appRoutes