import express, { Router } from 'express'
import userRouter from './userRoutes'
import authRouter from './authRoutes'


const appRoutes = express() 

appRoutes.use('/user/', userRouter)
appRoutes.use('/auth/', authRouter)

export const router = Router()
router.get('/', (req, res) => {
  res.send('API is working properly')
})

appRoutes.use('/', router)

export default appRoutes