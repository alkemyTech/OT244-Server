const express = require("express");
const validationResult = require('../middlewares/validationResult')
const { members } = require("../middlewares/validationBody");
const { createMember, deleteMember } = require("../controllers/member");
const router = express.Router()

router.post("/", members, validationResult, createMember)
router.delete("/:id", deleteMember, )

module.exports = router