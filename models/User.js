import mongoose, { Schema } from 'mongoose'
import validator from 'validator'
import { AUTH_ROLES } from './Enum'

const userSchema = Schema({
  nom: {
    type: String,
    // required: true,
    trim: true // Pour supprimer les caractères invisibles commes les espaces, etc...
  },
  prenom: {
    type: String,
    // required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true, // Conversion de l'email en minuscule
    validate: value => {
      if (!validator.isEmail(value)) { // Format invalide de l'email
        throw new Error({ error: '400: Adresse email invalide' })
      }
    }
  },
  telephone: {
    type: String,
    // required: true,
    //minLenght: 10
  },
  password: {
    type: String,
    // required: true,
  },

  roles : [{
    type: String, 
    Enum: [
      AUTH_ROLES.ADMIN, 
      AUTH_ROLES.USER
    ]

  }],

  adresses: [{
    streetAdress: {
      type: String,
      trim: true
    },
    zipCode: {
      type: String,
      trim: true
    },
    city: {
      type: String,
      trim: true
    },
   
  }],
  
  passwordResetCode: String,
  passwordResetExpiration: Date,
  lastPurchase: Date,
},{timestamps: true})


export default module = mongoose.model('User', userSchema)
