import userService from "../services/userService"
import { hash } from 'bcrypt'

const saltRounds = 10 

export const registerUser = async (req, res) => {
    const { password } = req.body
        try {
          const hashh = await hash(password, saltRounds)
          const user = await new userService().registerUser(req.body, hashh)
          return res.json(user)
        }
        catch(error) {
            res.status(error.status).send(error.message)
        }
}
           
export const loginUser = async (req, res) => {
    const {email, password}= req.body
    try {
       const user = await new userService().loginUser(email, password)
       return res.json(user)  
    }
    catch(error) {
        res.status(error.status).send(error.message)
    }  
}

export const loginAdmin = async (req, res) => {
    const {email, password}= req.body
    try {
       const admin = await new userService().loginAdmin(email, password)
       return res.json(admin)  
    }
    catch(error) {
        res.status(error.status).send(error.message)
    }  
}