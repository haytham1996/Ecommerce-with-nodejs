import userService from "../services/userService"

const saltRounds = 10 

export const registerUser = async (req, res) => {
    hash(req.body.password, saltRounds, (err, hash) => {
        try {
            await new userService().registerUser(req.body, hash)
            return res.json(data)
        }
        catch(error) {
            throw new Error(error && error.message)
        }
        
          
          })
          
         
}