var express = require('express');
var router = express.Router();

const indexRouter = require('./home');
const usersRouter = require('./users');
const newsRouter = require('./news');
const authRouter = require('./auth');
const testimonialRouter = require('./testimonials');
const membersRouter = require('./members');
const categoryRouter = require('./categories');
const routerActivities = require('./activities');
const slidesRouter = require('./slides')

router.use('/', indexRouter);
router.use('/users', usersRouter);
router.use('/news', newsRouter);
router.use('/auth', authRouter);
router.use('/testimonials', testimonialRouter);
router.use('/members', membersRouter);
router.use('/categories', categoryRouter);
router.use('/activities', routerActivities);
router.use('/slides', slidesRouter);

module.exports = router;

