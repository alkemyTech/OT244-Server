const express = require("express");
const { createComments, putComment } = require("../controllers/comments");
const { comments } = require("../middlewares/validationBody");
const router = express.Router();

router.post("/", comments, createComments);



router.put("/:id", putComment)

module.exports = router;