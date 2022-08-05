const express = require("express");
const user_authenticate = require('../middlewares/user-authenticate')
const verifyAdmin = require("../middlewares/verifyAdmin")
const validationResult = require('../middlewares/validationResult');
const { categories, bodyUpdateCategories } = require("../middlewares/validationBody");
const { createCategory, getCategories, getCategoryById , updateCategory, deleteCategoryById } = require("../controllers/categories");
const router = express.Router();

// GET list categories

router.get('/', user_authenticate, verifyAdmin, getCategories)
router.get("/:id", user_authenticate, verifyAdmin, getCategoryById);

// POST create category

router.post("/", user_authenticate, verifyAdmin, categories, validationResult, createCategory);
router.put('/:id', user_authenticate, verifyAdmin, bodyUpdateCategories, validationResult, updateCategory);

// DELETE category by id

router.delete("/:id", user_authenticate, verifyAdmin, deleteCategoryById)

module.exports = router;
