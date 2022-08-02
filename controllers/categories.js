const { Categories } = require("../models")

async function createCategory(req, res) {
  try {
    const { name, image, description } = req.body;

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

const updateCategory = async (req, res, next) => {

  const { id } = req.params;
  const { name, image, description } = req.body;

  try {
    const updatedCategory = await category.update(
      {
        name,
        image,
        description
      },
      {
        where:
        {
          id
        }
      });

    if (updatedCategory != 0) {
      return res.status(201).json({
        msg: 'Category updated successfully'
      });
    }
    else {
      return res.status(404).json({
        msg: 'Category not found'
      })
    }

  } catch (error) {
    next(error);
  }
};

module.exports = { createCategory, updateCategory };
