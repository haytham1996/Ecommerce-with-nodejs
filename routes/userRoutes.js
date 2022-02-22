import express from 'express'
import User from '../models/User'

const router = express.Router()

router.post('/userTest',  (req, res, next) => {
    
   const newUser = new User({
       nom: req.body.nom, 
       prenom: req.body.prenom, 
       email: req.body.email
   })

       const savedUser = newUser.save().then((savedUser) => res.status(201).json(savedUser))
       .catch((err) => next(err))

   
})

export default router