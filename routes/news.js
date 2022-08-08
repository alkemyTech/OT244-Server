const express = require("express");
const userAuthenticate = require('../middlewares/user-authenticate');
const verifyAdmin = require("../middlewares/verifyAdmin");
const validationResult = require('../middlewares/validationResult');
const { news } = require("../middlewares/validationBody");
const { createNews, updateNews, getNew, deleteNew } = require("../controllers/news");

const router = express.Router();

// POST for the admin to create news - full path "/news"
router.post("/", userAuthenticate, verifyAdmin, news, validationResult, createNews);

router.get("/:id", userAuthenticate, verifyAdmin, getNew);

router.put('/:id', userAuthenticate, verifyAdmin, news, validationResult, updateNews);

router.delete("/:id", userAuthenticate, verifyAdmin, deleteNew);

router.get('/', userAuthenticate, getAllNews)

module.exports = router;