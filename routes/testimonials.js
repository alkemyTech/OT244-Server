const { Router } = require('express');
const { createTestimonial } = require('../controllers/testimonial');

const router = Router();

router.post('/', createTestimonial);

module.exports = router;