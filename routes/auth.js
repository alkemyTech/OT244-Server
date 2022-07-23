const express = require("express");
const { createUser } = require("../controllers/auth");
const {
  validateFields,
  bodyFields,
} = require("../middlewares/validateCreateUser");
const router = express.Router();

// POST full path '/auth/register'

router.post("/register", bodyFields, validateFields, createUser);

module.exports = router;
