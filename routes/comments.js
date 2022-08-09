const express = require("express");
const { createComments, putComment } = require("../controllers/comments");
const { comments } = require("../middlewares/validationBody");
const verifyAdmin = require("./../middlewares/verifyAdmin")
const router = express.Router();

router.post("/", comments, createComments);


router.put("/:id", verifyAdmin, putComment)

module.exports = router;