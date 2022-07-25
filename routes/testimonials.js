const { Router } = require('express');
const { check } = require('express-validator');

const { createTestimonial } = require('../controllers/testimonials');

const router = Router();

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('content', 'Content is required').not().isEmpty()
], createTestimonial);