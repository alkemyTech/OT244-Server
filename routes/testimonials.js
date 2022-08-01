const express = require( "express" );
const { testimonials } = require('../middlewares/validationBody');
const { createTestimonial,putByIdTestimonial } = require('../controllers/testimonial');
const validationResult = require('../middlewares/validationResult')
const router = express.Router();

router.post('/', /* verifyAdmin */ testimonials, validationResult, createTestimonial);
router.put('/:id',/* verifyAdmin */ testimonials, validationResult, putByIdTestimonial)

module.exports = router;