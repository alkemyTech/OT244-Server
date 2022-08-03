const express = require('express')
const { postSlides, getSlides } = require('../controllers/slides')
const verifyAdmin = require('../middlewares/verifyAdmin')
const router = express.Router()

router.post('/', verifyAdmin, postSlides)
router.get('/', verifyAdmin, getSlides)

module.exports = router