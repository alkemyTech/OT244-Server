const {Categories} = require("../models")

async function createCategory(req, res) {
  try {
    const { name,image, description } = req.body;

    const newCategory = await Categories.create({
      name,
      image,
      description
    });
    const data = { msg: "Category created successfully", newCategory };

    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "An unexpected error occurred" });
  }
}

const deleteCategoryById = async (req, res, next) => { 
  const { id } = req.params 
  try {
    const category = await Categories.destroy({where:{id}})
    console.log(category)
    if (category) {
     
      return res.status(200).json({msg:"Category deleted successfully!"})
    }
    else {
      return res.status(404).json({msg:"Category not found"})
    }
      
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createCategory,
  deleteCategoryById,
};
