const { request, response } = require("express");
const { News } = require("../models");

async function createNews(req, res) {
  try {
    const { name, content, image, categoryId } = req.body;
    const news = await News.create({ name, content, image, categoryId });

    res.status(201).json(news);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "An unexpected error occurred" });
  }
}

const deleteNew = async(req = request, res = response, next) => {
  const { id } = req.params;
  try{
    const myNew = await News.findAll({
        where: { id }
    });      
    if(!myNew || myNew.length === 0){
        res.status(404).json({
            msg: "The new doesnt exist or it had been deleted"
        })
    }else{
        await News.destroy({ 
          where: { id }
        })
        res.json({
          msg: 'The new has been deleted!'
        })
    }    
  }catch(error){
    next(error)
  }
}

module.exports = {
  createNews,
  deleteNew
};
