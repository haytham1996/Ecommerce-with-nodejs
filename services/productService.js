import NotFoundError from "../errors/NotFoundError"
import Product from "../models/Product"
import { extend } from 'lodash'

export default class ProductService {
    
     static async createProduct(productData) {
        const product = new Product(productData)
        return await product.save()
      }
    

     static async updateProduct(productId, productData) {
        let product = await Product.findById(productId)
        if (!product) throw new NotFoundError('Produit introuvable')
        
        product = extend(product, productData)
        await product.save()
        return product
      }
    
     static async deleteProduct(productId) {
        const product = await Product.findById(productId)
        if (!product) {
          throw new NotFoundError('Produit introuvable')
        }
         await product.remove()
      }

     static async getProduct(productId) {
        const product = await Product.findById(productId)
        if (!product) {
          throw new NotFoundError('Produit introuvable')
        }
        return product
      }
     
     static async getAllProducts() {
        const products = await Product.find({});
        if (!products) {
          throw new NotFoundError('Aucun produit trouvée')
        }
    
        return products;
      };    
   

}