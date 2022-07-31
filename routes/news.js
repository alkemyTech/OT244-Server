const express = require("express");
const validationResult = require('../middlewares/validationResult')
const { news } = require("../middlewares/validationBody");
const { createNews, deleteNew } = require("../controllers/news");
const { checkNew } = require("../middlewares/checkExists")
const router = express.Router();

// POST for the admin to create news - full path "/news"

router.post("/", /* verifyAdmin, */ news, validationResult, createNews);

router.delete("/:id", checkNew, deleteNew);

module.exports = router;
