import { sign } from "jsonwebtoken"
import BadRequestError from "../errors/BadRequestError"
import { AUTH_ROLES } from "../models/Enum"
import User from "../models/User"
import Config from "../config/config"
import { compare  } from "bcrypt"
import ForbiddenError from "../errors/ForbiddenError"

export default class userService {

    async registerUser({email, telephone, prenom, nom, pushToken, adresses}, hash) {
       
      const user = await User.findOne({ email })
       
        if (user) throw new BadRequestError('L\'adresse mail existe déjà')
       
        const registerUser = new User({
          email,
          password: hash,
          telephone,
          prenom,
          nom,
          pushToken,
          adresses,
        
        })
    
        await registerUser.save()
        return registerUser


    }  
    
    
    async loginUser(email, password) {
     
      const user = await userService.findByCredentials(email, password)
      const token = await userService.generateAuthToken(user)
      return { token, user }
    }

    static async generateAuthToken(user) {
      const token = sign({ _id: user._id, role: AUTH_ROLES.USER }, Config.TOKEN_PASSWORD )
      return token
    }

    static async findByCredentials(email, password) {
      const user = await User.findOne({ email })
      if (!user) {
        throw new ForbiddenError('Identifiants incorrects')
      }
      
      const isPasswordMatch = await compare(password, user.password)
    
      if (!isPasswordMatch) {
        throw new ForbiddenError('Identifiants incorrects')
      }
      return user
    }
   


}