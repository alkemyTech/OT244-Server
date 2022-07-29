const express = require("express");
const validationResult = require('../middlewares/validationResult')
const { categories } = require("../middlewares/validationBody");
const { createCategory, updateCategory } = require("../controllers/categories");
const router = express.Router();

// POST create category

router.post("/", /* verifyAdmin, */ categories, validationResult, createCategory);

router.put('/:id',
  /* verifyAdmin */
  validationResult,
  updateCategory);

module.exports = router;
