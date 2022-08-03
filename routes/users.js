const express = require("express");
const { updateUserById } = require("../controllers/user");
const { bodyUpdateDataUser } = require("../middlewares/validationBody");
const validationResult = require("../middlewares/validationResult");


const router = express.Router();


/* GET users listing . */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});


// PUT users listing. 

router.put("/:id", bodyUpdateDataUser , validationResult, updateUserById );

module.exports = router;
