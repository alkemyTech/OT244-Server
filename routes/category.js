const express = require("express");
const { createCategory, updateCategory } = require("../controllers/categories");
const bodyFieldsCreateCategory = require("../middlewares/validateCreateCategory");
const { validateFields } = require("../middlewares/validateCreateUser");
const router = express.Router();

// POST create category

router.post(
  "/",
  /* verifyAdmin */
  bodyFieldsCreateCategory,
  validateFields,
  createCategory
);

router.put('/:id',
  /* verifyAdmin */
  validateFields,
  updateCategory);

module.exports = router;
