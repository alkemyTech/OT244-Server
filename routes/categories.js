const express = require("express");
const validationResult = require('../middlewares/validationResult')
const { categories } = require("../middlewares/validationBody");
const { createCategory } = require("../controllers/categories");
const router = express.Router();

// GET

router.get('/', /* verifyAdmin, */ getCategories)

// POST create category

router.post("/", /* verifyAdmin, */ categories, validationResult, createCategory);

module.exports = router;
