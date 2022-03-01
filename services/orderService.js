import Order from "../models/Order"
import NotFoundError from "../errors/NotFoundError";
export default class orderService {

  static async createOrder(orderData) {
     
    const { products } = orderData 
      const totalPrice = products.reduce((sum, i) => {
          return sum +  (i.price * i.quantity)
      })
      const order = new Order({
          ...orderData, 
          totalPrice
        })
       
        return await order.save()
  }

  static async updateOrder(orderId, name) {
    const order = await order.findById(orderId)

    if (!order) {
      throw new NotFoundError('Order introuvable')
    }

    Object.assign(order, {
      name
    })

    await order.save();
    return order;
  };

  static async deleteOrder(orderId) {
    const order = await order.findById(orderId);
    if (!order) {
      throw new NotFoundError('Order introuvable')
    }
    await order.remove()
    return;
  };

  static async getOrder(orderId) {
    const order = await order.findById(orderId);

    if (!order) {
      throw new NotFoundError('Order introuvable')
    }

    return order;
  };

  static async getAllOrders() {
    const orders = await Order.find({});
   
    if (!orders) {
      throw new NotFoundError('Aucune commande trouvée')
    }

    return orders;
  };

}
