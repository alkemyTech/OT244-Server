const express = require( "express" );
const userAuthenticate = require('../middlewares/user-authenticate')
const verifyAdmin = require("../middlewares/verifyAdmin")
const validationResult = require('../middlewares/validationResult')
const { activities } = require('../middlewares/validationBody')
const { addActivity } = require("../controllers/activities");
const router = express.Router();

router.post("/", userAuthenticate, verifyAdmin, activities, validationResult, addActivity);

module.exports = router;