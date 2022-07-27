const express = require("express");
const { createCategory } = require("../controllers/category");
const bodyFieldsCreateCategory = require("../middlewares/validateCreateCategory");
const { validateFields } = require("../middlewares/validateCreateUser");
const router = express.Router();

// POST create category

router.post(
  "/",
  /* checkAdmin, */
  bodyFieldsCreateCategory,
  validateFields,
  createCategory
);
module.exports = router;
