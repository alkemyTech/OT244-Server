const express = require( "express" );
const user_authenticate = require('../middlewares/user-authenticate')
const verifyAdmin = require("../middlewares/verifyAdmin")
const validationResult = require('../middlewares/validationResult')
const { testimonials } = require('../middlewares/validationBody');
const { createTestimonial } = require('../controllers/testimonial');
const router = express.Router();

router.post('/', user_authenticate, verifyAdmin, testimonials, validationResult, createTestimonial);

module.exports = router;