import mongoose, { Schema } from 'mongoose'

var cartSchema = new Schema(
  {
    userId: {
      type: Schema.ObjectId,
      ref: 'User',
    },
    products: [{
      _id: false,
      productId: {
          type: Schema.ObjectId,
          ref: 'Product',
        },
      name: String,
      quantity: {
          type: Number, 
          default: 1
      }

      }],
    totalPrice: Number,
  },
  {timestamps: true})



export default module = mongoose.model('Cart', cartSchema)
