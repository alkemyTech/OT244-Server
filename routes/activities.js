const express = require( "express" );
const { addActivity } = require("../controllers/activities");
const router = express.Router();

router.post( "/", addActivity );

module.exports = router;