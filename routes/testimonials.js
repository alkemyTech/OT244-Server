const express = require( "express" );
const { testimonials } = require('../middlewares/validationBody');
const { createTestimonial } = require('../controllers/testimonial');
const validationResult = require('../middlewares/validationResult')
const router = express.Router();

router.post('/', /* verifyAdmin */ testimonials, validationResult, createTestimonial);

module.exports = router;