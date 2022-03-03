import APIfeatures from "../helpers/features"
import Product from "../models/Product"


export const getProducts = async(req, res) => {
  try {
      const features = new APIfeatures(Product.find(), req.query)
      .filtering().sorting().paginating()
      const products = await features.query

      res.json({
          status: 'success',
          result: products.length,
          products: products
      })
      
  } catch (err) {
      return res.status(500).json({msg: err.message})
  }
}

export const createProduct = async(req, res) =>{
  try {
      const newProduct = new Product(req.body)

      await newProduct.save()
      res.json({msg: "Product Created"})

  } catch (err) {
      return res.status(500).json({msg: err.message})
  }
}

export const deleteProduct = async(req, res) =>{
  try {
      await Product.findByIdAndDelete(req.params.id)
      res.json({msg: "Deleted a Product"})
  } catch (err) {
      return res.status(500).json({msg: err.message})
  }
}

export const updateProduct = async(req, res) =>{
  try {
      await Product.findOneAndUpdate({_id: req.params.id},req.body)
       res.json({msg: "Product Updated"})
  } catch (err) {
      return res.status(500).json({msg: err.message})
  }
}
export const getProduct =  async (req, res) => {
  try {
      const product = await Product.findById(req.params.id)
      if(!product) return res.status(400).json({msg: "Product does not exist."})

      res.json(product)
  } catch (err) {
      return res.status(500).json({msg: err.message})
  }
}

export const getMyProducts = async(req, res) => {
  try {
      const features = new APIfeatures(Product.find({userId: req.user}), req.query)
      .filtering().sorting().paginating()
      const products = await features.query

      res.json({
          status: 'success',
          result: products.length,
          products: products
      })
      
  } catch (err) {
      return res.status(500).json({msg: err.message})
  }
}

