const express = require("express");
const { login } = require("../controllers/auth");
const { postLoginRequestValidations, validResult } = require("../middlewares/auth");
const { createUser } = require("../controllers/auth");
const { validateFields, bodyFields } = require("../middlewares/validateCreateUser");
const router = express.Router();

router.post("/login", postLoginRequestValidations, validResult, login);
router.post("/register", bodyFields, validateFields, createUser);

module.exports = router;