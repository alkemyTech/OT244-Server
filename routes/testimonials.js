const { Router } = require('express');
const { createTestimonial } = require('../controllers/testimonial');
const { bodyFields, fieldsValidation } = require('../middlewares/testimonials-validation');

const router = Router();

router.post('/', bodyFields,

    // Add checkAdmin middleware to validate if the user is admin and can access this function

    fieldsValidation,
    createTestimonial);

module.exports = router;