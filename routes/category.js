const express = require("express");
const { createCategory, getCategories } = require("../controllers/category");
const bodyFieldsCreateCategory = require("../middlewares/validateCreateCategory");
const { validateFields } = require("../middlewares/validateCreateUser");
const router = express.Router();

// GET

router.get('/', /* verifyAdmin, */ getCategories)

// POST create category

router.post(
  "/",
  /* checkAdmin, */
  bodyFieldsCreateCategory,
  validateFields,
  createCategory
);

module.exports = router;
