const express = require("express");
const validationResult = require('../middlewares/validationResult')
const { news } = require("../middlewares/validationBody");
const { createNews } = require("../controllers/news");
const router = express.Router();

// POST for the admin to create news - full path "/news"

router.post("/", /* verifyAdmin, */ news, validationResult, createNews);

module.exports = router;
