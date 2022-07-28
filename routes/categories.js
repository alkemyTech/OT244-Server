const express = require("express");
const { createCategory, getCategories } = require("../controllers/categories");
const bodyFieldsCreateCategory = require("../middlewares/validateCreateCategories");
const { validateFields } = require("../middlewares/validateCreateUser");
const router = express.Router();

// GET

router.get('/', /* verifyAdmin, */ getCategories)

// POST create category

router.post(
  "/",
  /* verifyAdmin, */
  bodyFieldsCreateCategory,
  validateFields,
  createCategory
);

module.exports = router;
