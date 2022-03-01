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
        res.send(error.message)
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

export const updateUser = async (req, res) => {
    const { user, body } = req 
    try {
            const updatedUser = await new userService().updateUser(user, body)
            return res.json(updatedUser)
    } catch(error) {
        res.status(error.status).send(error.message)
    }
}

export const deleteUser = async (req, res, next) => {
   try {
       const deletedUser = await new userService().deleteUser(req.params.id)
       return res.json(deletedUser)
    
  } catch(error) {
    res.send(error.message)
  }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await new userService().getAllUsers()
        return res.json(users)
    } catch(error) {
        res.send(error.message)
    }
}