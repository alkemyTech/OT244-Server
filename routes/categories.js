const express = require("express");
const userAuthenticate = require('../middlewares/user-authenticate')
const verifyAdmin = require("../middlewares/verifyAdmin")
const validationResult = require('../middlewares/validationResult');
const { categories, bodyUpdateCategories } = require("../middlewares/validationBody");
const { createCategory, getCategories, getCategoryById , updateCategory, deleteCategoryById } = require("../controllers/categories");
const router = express.Router();

// GET list categories

router.get('/', userAuthenticate, verifyAdmin, getCategories)
router.get("/:id", userAuthenticate, verifyAdmin, getCategoryById);

// POST create category

router.post("/", userAuthenticate, verifyAdmin, categories, validationResult, createCategory);
router.put('/:id', userAuthenticate, verifyAdmin, bodyUpdateCategories, validationResult, updateCategory);

// DELETE category by id

router.delete("/:id", userAuthenticate, verifyAdmin, deleteCategoryById)

module.exports = router;
