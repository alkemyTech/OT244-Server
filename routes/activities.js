const express = require( "express" );
const user_authenticate = require('../middlewares/user-authenticate')
const verifyAdmin = require("../middlewares/verifyAdmin")
const validationResult = require('../middlewares/validationResult')
const { activities } = require('../middlewares/validationBody')
const { addActivity } = require("../controllers/activities");
const router = express.Router();

router.post("/", user_authenticate, verifyAdmin, activities, validationResult, addActivity);

module.exports = router;