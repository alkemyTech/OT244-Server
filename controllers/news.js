const { request, response } = require("express");
const { News } = require("../models");
const { nextPage, prevPage } = require("../helpers/paginationTools");

async function createNews(req, res) {
  try {
    const { name, content, image, categoryId } = req.body;
    const news = await News.create({ name, content, image, categoryId });

    res.status(201).json(news);
  } catch (error) {
    res.status(500).json({ msg: "An unexpected error occurred" });
  }
}

const deleteNew = async (req = request, res = response, next) => {
  const { id } = req.params;
  try {
    const myNews = await News.destroy({
      where: { id }
    })
    if (myNews) {
      return res.json({
        msg: 'The new has been deleted!'
      })
    } else {
      return res.status(404).json({
        msg: "The new doesn't exist or it had been deleted"
      })
    }
  } catch (error) {
    next(error)
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

async function getNew(request, response, next) {
  const id = req.params.id
  try {
    const news = await News.findOne({
      where: { id },
      attributes: {
        exclude: ['id', 'deletedAt', 'createdAt', 'updatedAt']
      }
    })
    if (news) {
      return res.json({
        news
      })
    } else {
      res.status(404).json({
        msg: "This news doesn't exist!"
      });
    }
  } catch (error) {
    next(error)
  }
}

const getAllNews = async (req, res) => {
  const { page=0, limit=10 } = req.query;
  const offset = parseInt(page * limit);
  const endpoint = "news";
  try {
    const getData = await News.findAndCountAll({
      limit: parseInt(limit),
      offset
    });

    const pages = Math.floor(getData.count / size);

    res.status(200).json({
      getData,
      next: nextPage(endpoint,parseInt(page), pages),
      prev: prevPage(endpoint,parseInt(page), pages),
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createNews,
  deleteNew,
  getNew,
  updateNews,
  getAllNews,
};
