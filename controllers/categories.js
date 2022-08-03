const {Categories} = require("../models")

const getCategories = async (req,res) => {
  try {
    const getData = await Categories.findAll({attributes: ['name']})
    res.status(200).json(getData)
  } catch (error) {
    return res.status(500).json({ msg: "An unexpected error occurred" });
  }
}

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

module.exports = {
  createCategory,
  getCategories,
};
