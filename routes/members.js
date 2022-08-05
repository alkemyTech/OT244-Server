const express = require("express");
const user_authenticate = require('../middlewares/user-authenticate')
const verifyAdmin = require("../middlewares/verifyAdmin")
const validationResult = require('../middlewares/validationResult')
const { members } = require("../middlewares/validationBody");
const { createMember, deleteMember, getMembers } = require("../controllers/member");
const router = express.Router()

router.post("/", members, validationResult, createMember)

router.delete("/:id", deleteMember, )

router.get("/", user_authenticate, verifyAdmin, getMembers)

module.exports = router