import mongoose, { Schema } from 'mongoose'
import { orderStatus } from './Enum'


const orderSchema = new Schema({
   
    status: {
      type: String,
      enum: [
        orderStatus.WAITING_FOR_CONFIRMATION,
        orderStatus.WAITING_FOR_PAYMENT,
        orderStatus.COMPLETED,
        orderStatus.CANCELED,
        orderStatus.FAILED
      ],
    },
    billNumber: {
      type: String,
      unique: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
 
    deliveryAdress: {
        streetAdress: String,
        zipCode: String,
        city: String,
        latitude: String,
        longitude: String
      },
      facturationAdress: {
        streetAdress: String,
        zipCode: String,
        city: String,
        latitude: String,
        longitude: String
      },
    
    userId: {
      type: Schema.ObjectId,
      ref: 'User',
    },
    noteForSeller: {
      type: String,
      trim: true
    },
    noteForAdmin: {
      type: String,
    },
    sellerId: {
      type: Schema.ObjectId,
      ref: 'User',
    },

     products: [{
        _id: false,
        productId: {
            type: Schema.ObjectId,
            ref: 'Product',
          },
        price: Number, 
        name: String,
        quantity: {
            type: Number, 
            default: 1
        }
  
        }],
   
  },{timestamps:true})

  export default module = mongoose.model('Order', orderSchema)