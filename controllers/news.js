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

const updateNews = async (req, res, next) => {

  const { id } = req.params;
  const { name, content, image } = req.body;

  try {

    const news = await News.findByPk(id);

    if (!news) {
      return res.status(404).json({
        msg: 'News not found'
      });
    }

    const updatedNews = await news.update({
      name,
      content,
      image
    });

    return res.status(200).json(updatedNews);

  } catch (error) {
    next(error)
  }
};

module.exports = {
  createNews,
  updateNews
};
