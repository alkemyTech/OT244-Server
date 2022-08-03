const express = require( "express" );
const { testimonials } = require('../middlewares/validationBody');
const { createTestimonial, deleteByIdTestimonial} = require('../controllers/testimonial');
const validationResult = require('../middlewares/validationResult')
const router = express.Router();
const verifyAdmin  = require('../middlewares/verifyAdmin')

router.post('/', /* verifyAdmin */ testimonials, validationResult, createTestimonial);
router.delete('/:id',  verifyAdmin, deleteByIdTestimonial);
module.exports = router;