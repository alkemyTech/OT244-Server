const express = require( "express" );
const { testimonials } = require('../middlewares/validationBody');
const { createTestimonial,putByIdTestimonial } = require('../controllers/testimonial');
const validationResult = require('../middlewares/validationResult')
const router = express.Router();
const verifyAdmin = require ('../middlewares/verifyAdmin.js')

router.post('/', /* verifyAdmin */ testimonials, validationResult, createTestimonial);
router.put('/:id', verifyAdmin , testimonials, putByIdTestimonial)

module.exports = router;