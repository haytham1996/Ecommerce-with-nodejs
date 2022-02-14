import express, { Router } from 'express'
import userRouter from './userRoutes'


const appRoutes = express() 

appRoutes.use('/user/', userRouter)

export const router = Router()
router.get('/', (req, res) => {
  res.send('API is working properly')
})

appRoutes.use('/', router)

export default appRoutes