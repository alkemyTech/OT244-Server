const { request, response } = require("express");
const {Categories} = require("../models")
const { nextPage, prevPage } = require("../helpers/paginationTools");

const getCategories = async (req,res) => {
  const { page=0, limit=10 } = req.query;
  const offset = parseInt(page * limit);
  const endpoint = "categories";

  try {
    const getData = await Categories.findAndCountAll({
      limit: parseInt(limit),
      offset,
    });

    const pages =  Math.floor(getData.count/limit);

    res.status(200).json({
      getData,
      next: nextPage(endpoint,parseInt(page),pages),
      prev: prevPage(endpoint,parseInt(page),pages),
    })
  } catch (error) {
    return res.status(500).json({ msg: "An unexpected error occurred" });
  }
}

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

const updateCategory = async (req, res, next) => {

  const { id } = req.params;
  const { name, image, description } = req.body;

  try {
    const updatedCategory = await Categories.update(
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
      return res.status(200).json({
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

const getCategoryById = async(req = request, res = response, next) => {
  const id = req.params.id
  try{
    const category = await Categories.findOne({
      where: { id },
      attributes: {
        exclude: [ 'id', 'deletedAt', 'createdAt', 'updatedAt' ]
      }     
    })
    if(category){
      return res.json({
        category
      })
    }else{
      res.status(404).json({
        msg: "This category does'nt exist!"
      });
    }
  }catch(error){
    next(error)
  }
}

module.exports = {
  createCategory,
  deleteCategoryById,
  getCategories,
  getCategoryById,
  updateCategory,
}