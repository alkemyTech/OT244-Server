const express = require("express");
const { createNews } = require("../controllers/news");
const checkAdmin = require("../middlewares/checkAdmin");
const {
  bodyFieldsCreateNews,
  validateFieldsCreateNews,
} = require("../middlewares/validateCreateNews");
const router = express.Router();

// POST for the admin to create news - full path "/news"

router.post(
  "/",
  checkAdmin,
  bodyFieldsCreateNews,
  validateFieldsCreateNews,
  createNews
);

module.exports = router;
