const { Router } = require('express');
const { createTestimonial } = require('../controllers/testimonial');
const { bodyFields, fieldsValidation } = require('../middlewares/testimonials-validation');

const router = Router();

router.post('/', bodyFields, fieldsValidation, createTestimonial);

module.exports = router;