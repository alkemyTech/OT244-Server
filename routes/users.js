const express = require("express");
const { updateUserById, deleteUser } = require("../controllers/user");
const { bodyUpdateDataUser } = require("../middlewares/validationBody");
const validationResult = require("../middlewares/validationResult");
const { ownershipVerification } = require("../middlewares/ownership");
const router = express.Router();

/* GET users listing . */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// PUT users listing. 

router.delete("/:id", ownershipVerification, deleteUser,);
router.put("/:id", bodyUpdateDataUser , validationResult, updateUserById );

module.exports = router;
