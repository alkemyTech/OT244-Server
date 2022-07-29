const express = require("express");
const validationResult = require('../middlewares/validationResult')
const { members } = require("../middlewares/validationBody");
const { createMember } = require("../controllers/member");
const router = express.Router()

router.post("/", members, validationResult, createMember)

module.exports = router