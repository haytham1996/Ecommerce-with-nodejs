import Order from "../models/Order"
import OrderService from "../services/OrderService"

export const addOrder = async (req, res) => {
 try { 
      const Order = await OrderService.createOrder(req.body)
       return res.json(Order).sendStatus(201)
    } catch(error) {
        res.send(error.message)
    }
     
  }
  
  export const updateOrder = async (req, res) => {
    try {
        const order = await OrderService.updateOrder(req.params.orderId, req.body)
      return res.json(order)
    } catch(error) {
        res.send(error.message)
    }
  }
  
  export const getOrder = async (req, res) => { 
    const order = await OrderService.getOrder(req.params.id)
    return res.json(order)
  }
  
  export const getAllOrders = async (req, res) => {
     try {
         const orders =  await OrderService.getAllOrders()
      return res.json(orders)
    } catch(error) {
          res.send(error.message)
      }
  }

  export const deleteOrder = async (req, res) => {
    await OrderService.deleteOrder(req.params.orderId)
       res.sendStatus(204)
     
  }


  export const getOrdersByUser = async (req, res) => {
    const ordersByUser = await Order.find({userId: req.params.userId})
    return res.json(ordersByUser)
}