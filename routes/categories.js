const express = require("express");
const validationResult = require('../middlewares/validationResult')
const verifyAdmin = require("./../middlewares/verifyAdmin")
const { categories } = require("../middlewares/validationBody");
const { createCategory, getCategories, getCategoryById } = require("../controllers/categories");

const router = express.Router();

// GET list categories

router.get('/', /* verifyAdmin, */ getCategories)

// POST create category

router.post("/", /* verifyAdmin, */ categories, validationResult, createCategory);

router.get("/:id", verifyAdmin, getCategoryById);

module.exports = router;
