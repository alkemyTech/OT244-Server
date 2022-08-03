const express = require('express')
const { getSlides } = require('../controllers/slides')
const router = express.Router()

router.get('/', /* verifyAdmin, */ getSlides)

module.exports = router