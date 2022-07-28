const express = require("express");
const { createNews } = require("../controllers/news");
const {
  bodyFieldsCreateNews,
  validateFieldsCreateNews,
} = require("../middlewares/validateCreateNews");
const router = express.Router();

// POST for the admin to create news - full path "/news"

router.post(
  "/",
  /* verifyAdmin, */
  bodyFieldsCreateNews,
  validateFieldsCreateNews,
  createNews
);

module.exports = router;
