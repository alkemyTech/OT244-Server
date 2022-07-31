var express = require('express');
var router = express.Router();

const indexRouter = require('./home');
const usersRouter = require('./users');
const membersRouter = require('./members');
const categoryRouter = require('./categories');
const newsRouter = require('./news');
const authRouter = require('./auth');
const testimonialRouter = require('./testimonials');
const routerActivities = require('./activities');

router.use('/', indexRouter);
router.use('/users', usersRouter);
router.use('/categories', categoryRouter);
router.use('/news', newsRouter);
router.use('/auth', authRouter);
router.use('/testimonials', testimonialRouter);
router.use('/members', membersRouter);
router.use('/activities', routerActivities)

module.exports = router;

