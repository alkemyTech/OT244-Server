const express = require("express");
const validationResult = require('../middlewares/validationResult')
const { categories } = require("../middlewares/validationBody");
const verifyAdmin = require("../middlewares/verifyAdmin")
const { createCategory, deleteCategoryById } = require("../controllers/categories");
const router = express.Router();

// POST create category

router.post("/", /* verifyAdmin, */ categories, validationResult, createCategory);

// DELETE category by id

router.delete("/:id", verifyAdmin, deleteCategoryById)

module.exports = router;
