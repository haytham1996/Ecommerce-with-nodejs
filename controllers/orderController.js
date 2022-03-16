import Order from "../models/Order"


export const createOrder = async(req, res) => {
 try {
  const { products } = req.body
  const totalPrice = products.reduce((sum, i) => {
      return sum +  (i.price * i.quantity)
  },0)
  const order = new Order({
      ...req.body, 
      totalPrice
    })
  await order.save()
   return res.json(order)
} catch (err) {
  return res.status(500).json({msg: err.message})
}
}
export const getOrders = async(req, res) => {
    const orders = await Order.find({})     
    if (!orders) return res.status(500).json({msg: "No Order Found"})
    return res.json(orders)
}


export const deleteOrder = async(req, res) =>{
  try {
      await Order.findByIdAndDelete(req.params.id)
      return res.json({msg: "Order Deleted"})
  } catch (err) {
      return res.status(500).json({msg: err.message})
  }
}

export const updateOrder = async(req, res) =>{
  try {
        const order = await Order.findOneAndUpdate({_id: req.params.id},req.body, {new: true} )
        return res.json(order)
  } catch (err) {
      return res.status(500).json({msg: err.message})
  }
}
export const getOrder =  async (req, res) => {
  try {
      const order = await Order.findById(req.params.id)
      if(!order) return res.status(400).json({msg: "Order does not exist."})
      return res.json(order)
  } catch (err) {
      return res.status(500).json({msg: err.message})
  }
}

export const getMyOrders = async(req, res) => {
  try {
     const myOrders = await Order.find({userId: req.user})
    if(myOrders) res.status(404).json({msg: "You don't have any orders"})
     return res.json(myOrders)
  } catch (err) {
      return res.status(500).json({msg: err.message})
  }
}

