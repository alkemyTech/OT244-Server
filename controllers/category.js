const {Category} = require("../models")
async function createCategory(req, res) {
  try {
    const { name } = req.body;

    const newCategory = await Category.create({ name });
    const data = { msg: "Category created successfully", newCategory };

    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "An unexpected error occurred" });
  }
}

module.exports = { createCategory };
