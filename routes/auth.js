const express = require("express");
const validationResult = require('../middlewares/validationResult')
const { bodyLogin, bodyRegister } = require("../middlewares/validationBody");
const { createUser, login } = require("../controllers/auth");
const router = express.Router();

router.post("/login", bodyLogin, validationResult, login);
router.post("/register",  /*verifyAdmin,*/bodyRegister, validationResult, createUser);

module.exports = router;