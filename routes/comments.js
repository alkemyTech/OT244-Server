const express = require("express");
const createComments = require("../controllers/comments");
const { comments } = require("../middlewares/validationBody");
const router = express.Router();

router.post("/", comments, createComments);

module.exports = router;