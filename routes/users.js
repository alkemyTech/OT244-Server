const express = require("express");
const deleteUser = require("../controllers/user");
const router = express.Router();



/* GET users listing . */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.delete("/:id", /*validateToken,*/ deleteUser,);

module.exports = router;
