import CategoryService from "../services/categoryService"

export const addCategory = async (req, res) => {
   const category = await CategoryService.createCategory(req.body.name)
    
       return res.json(category).sendStatus(201)
     
  }
  
  export const updateCategory = async (req, res) => {
    const category = CategoryService.updateCategory(req.params.categoryId, req.body.name)
      return res.json(category)
  }
  
  export const getCategory = async (req, res) => { 
    const category = await CategoryService.getCategory(req.params.categoryId)
    return res.json(category)
  }
  
  export const getAllCategories = async (req, res, next) => {
     try {
         const categories =  await CategoryService.getAllCategories()
      return res.json(categories)
    } catch(error) {
          res.send(error.message)
      }
  }

  export const deleteCategory = async (req, res) => {
    await CategoryService.deleteCategory(req.params.categoryId)
       res.sendStatus(204)
     
  }