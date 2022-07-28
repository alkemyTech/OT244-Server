const express = require( "express" );
const { addActivity } = require("../controllers/activities");
const { bodyFieldsCreateActivity, validateFieldsCreateActivity } = require("../middlewares/validate-activity");
const router = express.Router();

router.post( "/", [
    /* verifyAdmin, */
    bodyFieldsCreateActivity,
    validateFieldsCreateActivity    
], addActivity );

module.exports = router;