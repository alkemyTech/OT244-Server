const express = require("express");
const user_authenticate = require('../middlewares/user-authenticate');
const verifyAdmin = require("../middlewares/verifyAdmin");
const validationResult = require('../middlewares/validationResult');
const { members } = require("../middlewares/validationBody");
const { createMember, deleteMember, getMembers, updateMember } = require("../controllers/member");
const router = express.Router();

router.get("/", user_authenticate, verifyAdmin, getMembers);
router.post("/", user_authenticate, verifyAdmin, members, validationResult, createMember);
router.put('/', user_authenticate, verifyAdmin, members, validationResult, updateMember);
router.delete("/:id", user_authenticate, verifyAdmin, deleteMember, );


module.exports = router;