const express = require( "express" );
const { addActivity } = require("../controllers/activities");
const checkAdmin = require("../middlewares/checkAdmin");
const { bodyFieldsCreateActivity, validateFieldsCreateActivity } = require("../middlewares/validate-activity");
const router = express.Router();

router.post( "/", [
    bodyFieldsCreateActivity,
    validateFieldsCreateActivity,
    checkAdmin
], addActivity );

module.exports = router;