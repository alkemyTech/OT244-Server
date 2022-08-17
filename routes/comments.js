const express = require("express");
const { createComments, putComment, getComments } = require("../controllers/comments");
const { comments } = require("../middlewares/validationBody");
const verifyAdmin = require("./../middlewares/verifyAdmin");
const ownership = require("./../middlewares/ownership")

const router = express.Router();

router.post("/", comments, createComments);

router.put("/:id", ownership, verifyAdmin, putComment)

router.get("/", verifyAdmin, getComments)


module.exports = router;