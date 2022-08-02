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

    const updatedNews = await News.update(
      {
        name,
        content,
        image
      },
      {
        where:
        {
          id
        }
      }
    );

    if (updatedNews != 0) {
      return res.status(201).json({
        msg: 'News updated successfully'
      });
    } else {
      return res.status(404).json({
        msg: 'News not found'
      });
    }

  } catch (error) {
    next(error)
  }
};

module.exports = {
  createNews,
  updateNews
};
