const express = require( "express" );
const userAuthenticate = require('../middlewares/user-authenticate');
const verifyAdmin = require("../middlewares/verifyAdmin");
const validationResult = require('../middlewares/validationResult');
const { activities, bodyUpdateActivityById } = require('../middlewares/validationBody');
const { addActivity, updateActivityById } = require("../controllers/activities");
const router = express.Router();

router.post("/", userAuthenticate, verifyAdmin, activities, validationResult, addActivity);

// PUT activity by id
router.put(
  "/:id",
  userAuthenticate,
  verifyAdmin,
  bodyUpdateActivityById,
  validationResult,
  updateActivityById
);

module.exports = router;