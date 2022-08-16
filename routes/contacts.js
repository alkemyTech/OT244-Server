
const express = require("express");
const validationResult = require('../middlewares/validationResult');
const userAuthenticate = require('../middlewares/user-authenticate');
const verifyAdmin = require("../middlewares/verifyAdmin");
const { contacts } = require('../middlewares/validationBody');
const { addContact, getContacts } = require("./../controllers/contacts");
const router = express.Router();

router.get('/', userAuthenticate, verifyAdmin, getContacts);
router.post("/", contacts, validationResult, addContact);   

module.exports = router;
