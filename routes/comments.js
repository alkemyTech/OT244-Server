const express = require("express");
const { createComments, putComment, getComments } = require("../controllers/comments");

const { comments } = require("../middlewares/validationBody");
const verifyAdmin = require("./../middlewares/verifyAdmin");

const {ownershipVerification} = require("../middlewares/ownership")
const userAuthenticate = require('../middlewares/user-authenticate')
const validationResult = require('../middlewares/validationResult');

const router = express.Router();



router.post("/", comments, validationResult, createComments);
router.put("/:id", ownershipVerification, verifyAdmin, putComment)
router.get("/", userAuthenticate, verifyAdmin, getComments)


module.exports = router;