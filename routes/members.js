const express = require("express");
const validationResult = require('../middlewares/validationResult')
const { members } = require("../middlewares/validationBody");
const verifyAdmin = require("./../middlewares/verifyAdmin")
const { createMember, deleteMember, getMembers } = require("../controllers/member");
const router = express.Router()

router.post("/", members, validationResult, createMember)

router.delete("/:id", deleteMember, )

router.get("/", verifyAdmin, getMembers)

module.exports = router