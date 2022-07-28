const express = require("express");
const { login } = require("../controllers/auth");
const { postLoginRequestValidations, validResult } = require("../middlewares/auth");
/* const {validateJWT} = require("../middlewares/user-authenticate") */
const { createUser } = require("../controllers/auth");
const { validateFields, bodyFields  } = require("../middlewares/validateCreateUser");
const { getDataUser} = require("../controllers/user");
const router = express.Router();

router.post("/login", postLoginRequestValidations, validResult, login);
router.post("/register", bodyFields, validateFields, createUser);


// GET

router.get("/me", /* validateJWT, */ getDataUser)

module.exports = router;
