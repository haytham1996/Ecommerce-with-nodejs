import User from "../models/User"

export const getUser =  async (req, res) => {
    try {
        const user = await User.findById(req.user).select('-password')
        if(!user) return res.status(400).json({msg: "User does not exist."})

        res.json(user)
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}
export const updateUser = async (req, res) => {
    try {  
        const {email, telephone, prenom, nom, password, roles, adresses} = req.body;

        const user = await User.findOne({email})

        if(user) return res.status(400).json({msg: "The email already exists."})

        await User.findOneAndUpdate({_id: req.user}, {
            email, telephone, prenom, nom, password, roles, adresses
                   })

        res.json({msg: "User Updated"})

    } catch(error) {
        res.status(error.status).send(error.message)
    }
}

export const deleteUser = async (req, res) => {
    try {

       const deletedUser = await User.findByIdAndDelete(req.params.id)
        
       if(!deletedUser)  return res.status(500).json({msg: "User does not exist"})
        
        res.json({msg: "User Deleted"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const projection = {password: false}
        const users = await User.find({}, projection).sort('-created_at')
      
        if (!users) return res.status(500).json({msg: "No Users Found"})

        res.json(users)
      
    } catch(error) {
        res.send(error.message)
    }
}