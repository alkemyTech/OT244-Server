const express = require("express");
const validationResult = require('../middlewares/validationResult')
const verifyAdmin = require("./../middlewares/verifyAdmin")
const { categories } = require("../middlewares/validationBody");
const { createCategory, getCategoryById } = require("../controllers/categories");
const router = express.Router();

// POST create category

router.post("/", /* verifyAdmin, */ categories, validationResult, createCategory);

router.get("/:id", verifyAdmin, getCategoryById);

module.exports = router;
