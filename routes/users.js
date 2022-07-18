const express = require("express");
const { createUser } = require("../controllers/user");
const {
  validateFields,
  bodyFields,
} = require("../middlewares/validateCreateUser");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/auth/register", bodyFields, validateFields, createUser);

module.exports = router;
