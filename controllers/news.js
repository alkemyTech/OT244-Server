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
    const myNews = await News.destroy({
      where: { id }
    })
    if( myNews ){
      return res.json({
        msg: 'The new has been deleted!'
      })
    }else{
      return res.status(404).json({
        msg: "The new doesnt exist or it had been deleted"
    })
    }
  }catch(error){
    console.log(error)
    next(error)
  }
}

module.exports = {
  createNews,
  deleteNew
};
