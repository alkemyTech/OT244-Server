const express = require("express");
const validationResult = require('../middlewares/validationResult')
const { members } = require("../middlewares/validationBody");
const { createMember, updateMember } = require("../controllers/member");
const router = express.Router()

router.post("/", members, validationResult, createMember)

router.put('/', members, validationResult, updateMember);

module.exports = router