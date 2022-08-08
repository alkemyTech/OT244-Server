const express = require( "express" );
const userAuthenticate = require('../middlewares/user-authenticate')
const verifyAdmin = require("../middlewares/verifyAdmin")
const validationResult = require('../middlewares/validationResult')
const { testimonials } = require('../middlewares/validationBody');
const { createTestimonial, deleteByIdTestimonial} = require('../controllers/testimonial');
const router = express.Router();

router.post('/', userAuthenticate, verifyAdmin, testimonials, validationResult, createTestimonial);
router.delete('/:id', userAuthenticate, verifyAdmin, deleteByIdTestimonial);

module.exports = router;