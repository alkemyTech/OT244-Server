const express = require("express");
const deleteUser = require("../controllers/user");
const { ownershipVerification } = require("../middlewares/ownership");
const router = express.Router();



/* GET users listing . */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.delete("/:id", ownershipVerification, deleteUser,);

module.exports = router;
