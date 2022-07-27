const express = require("express");
const { Router } = require("express");
const { login } = require("../controllers/auth");
const {
  postLoginRequestValidations,
} = require("../middlewares/auth");
const { createUser } = require("../controllers/auth");
const { validateFields, bodyFields } = require("../middlewares/validateCreateUser");

const router = express.Router();

router.post("/auth/login", postLoginRequestValidations,login);

router.post("/register", bodyFields, validateFields, createUser);

module.exports = router;