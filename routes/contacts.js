const express = require("express");
const validationResult = require('../middlewares/validationResult');
const { contacts } = require('../middlewares/validationBody');
const { addContact } = require("./../controllers/contacts")
const router = express.Router();

router.post("/", validationResult, contacts, addContact)

module.exports = router