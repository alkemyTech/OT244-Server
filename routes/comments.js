const express = require("express");
const { createComments, getComments } = require("../controllers/comments");
const { comments } = require("../middlewares/validationBody");
const verifyAdmin = require("../middlewares/verifyAdmin")
const router = express.Router();

router.post("/", comments, createComments);

router.get("/", verifyAdmin, getComments)

module.exports = router;