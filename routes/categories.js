const express = require("express");
const validationResult = require('../middlewares/validationResult');
const { categories, bodyUpdateCategories } = require("../middlewares/validationBody");
const verifyAdmin = require("./../middlewares/verifyAdmin")
const { createCategory, getCategories, getCategoryById , updateCategory, deleteCategoryById } = require("../controllers/categories");
const router = express.Router();

// GET list categories

router.get('/', /* verifyAdmin, */ getCategories)
router.get("/:id", verifyAdmin, getCategoryById);

// POST create category

router.post("/", /* verifyAdmin, */ categories, validationResult, createCategory);
router.put('/:id',
  /* verifyAdmin, */
  bodyUpdateCategories,
  validationResult,
  updateCategory);

// DELETE category by id

router.delete("/:id", verifyAdmin, deleteCategoryById)

module.exports = router;
