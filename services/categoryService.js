import Category from "../models/category"
import ForbiddenError from "../errors/ForbiddenError";
import NotFoundError from "../errors/NotFoundError";
export default class CategoryService {

  static async createCategory(name) {
    let category = await Category.findOne({ name });
    if (category) {
      throw new ForbiddenError('Categorie deja existante');
    }
    category = new Category();
    Object.assign(category, {
      name
    })

    await category.save();
    return category;
  };

  static async updateCategory(categoryId, name) {
    const category = await Category.findById(categoryId)

    if (!category) {
      throw new NotFoundError('Categorie introuvable')
    }

    Object.assign(category, {
      name
    })

    await category.save();
    return category;
  };

  static async deleteCategory(categoryId) {
    const category = await Category.findById(categoryId);
    if (!category) {
      throw new NotFoundError('Categorie introuvable')
    }
    await category.remove()
    return;
  };

  static async getCategory(categoryId) {
    const category = await Category.findById(categoryId);

    if (!category) {
      throw new NotFoundError('Categorie introuvable')
    }

    return category;
  };

  static async getAllCategories() {
    const categories = await Category.find({});
   
    if (!categories) {
      throw new NotFoundError('Aucune categorie trouvée')
    }

    return categories;
  };

}
