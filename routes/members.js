const express = require("express");
const router = express.Router()
const { bodyFields, validateFields } = require("../middlewares/validateCreateMember");
const { createMember } = require("../controllers/member");


router.post("/", bodyFields, validateFields, createMember)

module.exports = router