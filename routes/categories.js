const express = require("express");
const validationResult = require('../middlewares/validationResult')
const { categories } = require("../middlewares/validationBody");
const { createCategory, getCategories } = require("../controllers/categories");
const router = express.Router();

// GET list categories

router.get('/', /* verifyAdmin, */ getCategories)

// POST create category

router.post("/", /* verifyAdmin, */ categories, validationResult, createCategory);

module.exports = router;
