const express = require('express');
const userAuthenticate = require('../middlewares/user-authenticate');
const verifyAdmin = require("../middlewares/verifyAdmin");
const { getContacts } = require('../controllers/backoffice');
const router = express.Router();

router.get('/contacts', userAuthenticate, verifyAdmin, getContacts);

module.exports = router;