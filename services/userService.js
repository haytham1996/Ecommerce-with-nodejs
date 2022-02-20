import BadRequestError from "../errors/BadRequestError"
import User from "../models/User"


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
   

}