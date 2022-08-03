const express = require("express");
const validationResult = require('../middlewares/validationResult')
const { members } = require("../middlewares/validationBody");
const verifyAdmin = require("./../middlewares/verifyAdmin")
const { createMember, getMembers } = require("../controllers/member");
const router = express.Router()

router.post("/", members, validationResult, createMember)

router.get("/", verifyAdmin, getMembers)

module.exports = router