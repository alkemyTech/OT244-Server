const express = require( "express" );
const userAuthenticate = require('../middlewares/user-authenticate');
const verifyAdmin = require("../middlewares/verifyAdmin");
const validationResult = require('../middlewares/validationResult');
const { testimonials } = require('../middlewares/validationBody');
const { createTestimonial, deleteByIdTestimonial, getAllTestimonials, putByIdTestimonial} = require('../controllers/testimonial');
const router = express.Router();

router.put('/:id', userAuthenticate, verifyAdmin , testimonials, putByIdTestimonial)
router.post('/', userAuthenticate, verifyAdmin, testimonials, validationResult, createTestimonial);
router.delete('/:id', userAuthenticate, verifyAdmin, deleteByIdTestimonial);
router.get('/', getAllTestimonials)

module.exports = router;