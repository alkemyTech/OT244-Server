const express = require('express')
const { postSlides } = require('../controllers/slides')
const router = express.Router()

router.post('/', /* verifyAdmin, */ postSlides)

module.exports = router