const { News } = require("../models");
async function createNews(req, res) {
  try {
    const { name, content, image } = req.body;
    const news = await News.create({ name, content, image });

    res.status(201).json(news);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "An unexpected error occurred" });
  }
}

module.exports = {
  createNews,
};
