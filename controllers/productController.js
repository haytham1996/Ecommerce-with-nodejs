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
      return res.json(newProduct)

  } catch (err) {
      return res.status(500).json({msg: err.message})
  }
}

export const deleteProduct = async(req, res) =>{
  try {
      await Product.findByIdAndDelete(req.params.id)
      return res.json({msg: "Deleted a Product"})
  } catch (err) {
      return res.status(500).json({msg: err.message})
  }
}

export const updateProduct = async(req, res) =>{
  try {
      const updatedProduct= await Product.findOneAndUpdate({_id: req.params.id},req.body, {new: true})
       return res.json(updatedProduct)
  } catch (err) {
      return res.status(500).json({msg: err.message})
  }
}
export const getProduct =  async (req, res) => {
  try {
      const product = await Product.findById(req.params.id)
      if(!product) return res.status(400).json({msg: "Product does not exist."})

       return res.json(product)
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

