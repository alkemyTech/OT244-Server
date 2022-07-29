const express = require( "express" );
const validationResult = require('../middlewares/validationResult')
const { activities } = require('../middlewares/validationBody')
const { addActivity } = require("../controllers/activities");
const router = express.Router();

router.post("/", /* verifyAdmin, */ activities, validationResult, addActivity);

module.exports = router;