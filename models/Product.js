import mongoose, { Schema } from 'mongoose'

const productSchema = new Schema({

    name: {
        type: String,
        required: true
      },
      description: {
        type: String
      },
      category: {
        type: Schema.ObjectId,
        ref: 'Category'
      },
      price: {
        type: Number,
      },
      quantity: Number,
      haveStock: Boolean,
      reference: {
        type: String,
        trim: true
      },
      imagePath: String,
      userId: {
        type: Schema.ObjectId,
        ref: 'User'
      }

}, {timestamps : true})

export default module = mongoose.model('Product', productSchema)