const express = require("express");
const validateJWT = require("../middlewares/user-authenticate")
const validationResult = require('../middlewares/validationResult')
const { bodyLogin, bodyRegister } = require("../middlewares/validationBody");
const { createUser, login } = require("../controllers/auth");
const { getDataUser} = require("../controllers/user");
const router = express.Router();

router.post("/login", bodyLogin, validationResult, login);
router.post("/register", bodyRegister, validationResult, createUser);
router.get("/me", validateJWT, getDataUser)

module.exports = router;
