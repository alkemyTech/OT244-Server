const express = require('express');
const { getContacts } = require('../controllers/contacts');
const userAuthenticate = require('../middlewares/user-authenticate');
const verifyAdmin = require("../middlewares/verifyAdmin");
const router = express.Router();

router.get('/', userAuthenticate, verifyAdmin, getContacts);

module.exports = router;