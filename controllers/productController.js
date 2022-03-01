import Product from "../models/Product"
import ProductService from "../services/productService"

export const addProduct = async (req, res) => {
 try { 
      const product = await ProductService.createProduct(req.body)
       return res.json(product).sendStatus(201)
    } catch(error) {
        res.send(error.message)
    }
     
  }
  
  export const updateProduct = async (req, res) => {
    try {
        const product = await ProductService.updateProduct(req.params.productId, req.body)
      return res.json(product)
    } catch(error) {
        res.send(error.message)
    }
  }
  
  export const getProduct = async (req, res) => { 
    const product = await ProductService.getProduct(req.params.id)
    return res.json(product)
  }
  
  export const getAllProducts = async (req, res) => {
     try {
         const products =  await ProductService.getAllProducts()
      return res.json(products)
    } catch(error) {
          res.send(error.message)
      }
  }

  export const deleteProduct = async (req, res) => {
    await ProductService.deleteProduct(req.params.productId)
       res.sendStatus(204)
     
  }

  export const getProductsByCategory = async (req, res) => {
      const productsByCatgory = await Product.find({category: req.params.categoryId})
      return res.json(productsByCatgory)
  }

  export const getProductsByUser = async (req, res) => {
    const productsByUser = await Product.find({userId: req.params.userId})
    return res.json(productsByUser)
}