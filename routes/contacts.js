const express = require('express');
const userAuthenticate = require('../middlewares/user-authenticate');
const verifyAdmin = require("../middlewares/verifyAdmin");
const { listAll } = require('../controllers/contacts');
const router = express.Router();

router.get('/', userAuthenticate, verifyAdmin, listAll);

module.exports = router;