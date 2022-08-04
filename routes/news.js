const express = require("express");
const validationResult = require('../middlewares/validationResult')
const { news } = require("../middlewares/validationBody");
const { createNews, deleteNew } = require("../controllers/news");
const verifyAdmin = require("./../middlewares/verifyAdmin")
const router = express.Router();

// POST for the admin to create news - full path "/news"

router.post("/", /* verifyAdmin, */ news, validationResult, createNews);

router.delete("/:id", /* verifyAdmin,*/ deleteNew);

module.exports = router;
