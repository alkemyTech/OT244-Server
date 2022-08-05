const express = require("express");
const userAuthenticate = require('../middlewares/user-authenticate');
const verifyAdmin = require("../middlewares/verifyAdmin");
const validationResult = require('../middlewares/validationResult');
const { members } = require("../middlewares/validationBody");
const { createMember, deleteMember, getMembers, updateMember } = require("../controllers/member");
const router = express.Router();

router.get("/", userAuthenticate, verifyAdmin, getMembers);
router.post("/", userAuthenticate, verifyAdmin, members, validationResult, createMember);
router.put('/', userAuthenticate, verifyAdmin, members, validationResult, updateMember);
router.delete("/:id", userAuthenticate, verifyAdmin, deleteMember, );


module.exports = router;