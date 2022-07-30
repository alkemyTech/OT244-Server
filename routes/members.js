const express = require("express");
const validationResult = require('../middlewares/validationResult')
const { members } = require("../middlewares/validationBody");
const { createMember, deleteMember } = require("../controllers/member");
const checkMember = require("../middlewares/checkExists");
const router = express.Router()

router.post("/", members, validationResult, createMember)
router.delete("/:id", checkMember, deleteMember, )

module.exports = router