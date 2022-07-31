const { request, response } = require("express")
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

const deleteNew = async(req = request, res = response) => {
  const { id } = req.params;
  try{
    await News.destroy({ 
      where: { id }
    })
    res.sendStatus(204)
  }catch(error){
    res.status(500).json({
      msg: "Please contact to support"
    })
  }
}

module.exports = {
  createNews,
  deleteNew
};
