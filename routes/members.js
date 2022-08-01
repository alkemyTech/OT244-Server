const express = require("express");
const validationResult = require('../middlewares/validationResult')
const { members, bodyUpdateMember } = require("../middlewares/validationBody");
const { createMember, updateMember } = require("../controllers/member");
const router = express.Router()

router.post("/", members, validationResult, createMember)

router.put('/', bodyUpdateMember, validationResult, updateMember);

module.exports = router