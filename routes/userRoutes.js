import express from 'express'
import { AUTH_ROLES } from '../models/Enum'
import User from '../models/User'
import { authorize } from '/users/haytham/desktop/ala/ecommerce-api/middlewares/auth'

const router = express.Router()

router.post('/userTest', authorize(AUTH_ROLES.USER),  (req, res, next) => {
    
   const newUser = new User({
       nom: req.body.nom, 
       prenom: req.body.prenom, 
       email: req.body.email
   })

       const savedUser = newUser.save().then((savedUser) => res.status(201).json(savedUser))
       .catch((err) => next(err))

   
})

export default router