const express = require('express')
const userAuthenticate = require('../middlewares/user-authenticate')
const verifyAdmin = require("../middlewares/verifyAdmin")
const { postSlides, getSlides } = require('../controllers/slides')
const router = express.Router()

router.post('/', userAuthenticate, verifyAdmin, postSlides)
router.get('/', userAuthenticate, verifyAdmin, getSlides)

module.exports = router