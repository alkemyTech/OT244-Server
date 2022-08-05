const express = require('express')
const user_authenticate = require('../middlewares/user-authenticate')
const verifyAdmin = require("../middlewares/verifyAdmin")
const { postSlides, getSlides } = require('../controllers/slides')
const router = express.Router()

router.post('/', user_authenticate, verifyAdmin, postSlides)
router.get('/', user_authenticate, verifyAdmin, getSlides)

module.exports = router