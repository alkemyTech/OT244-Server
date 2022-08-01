const express = require( "express" );
const { testimonials } = require('../middlewares/validationBody');
const { createTestimonial, deleteByIdTestimonial} = require('../controllers/testimonial');
const validationResult = require('../middlewares/validationResult')
const router = express.Router();

router.post('/', /* verifyAdmin */ testimonials, validationResult, createTestimonial);
router.delete('/:id', /* verifyAdmin */ testimonials, validationResult, deleteByIdTestimonial);
module.exports = router;