const express = require("express");
const userAuthenticate = require('../middlewares/user-authenticate')
const verifyAdmin = require("../middlewares/verifyAdmin")
const validationResult = require('../middlewares/validationResult')
const { news } = require("../middlewares/validationBody");
const { createNews, updateNews, getNew, deleteNew } = require("../controllers/news");
const verifyAdmin = require("./../middlewares/verifyAdmin")

const router = express.Router();

// POST for the admin to create news - full path "/news"
router.post("/", userAuthenticate, verifyAdmin, news, validationResult, createNews);

router.get("/:id", /* verifyAdmin, */  getNew);

router.put('/:id', verifyAdmin, news, validationResult, updateNews);

router.delete("/:id", /* verifyAdmin,*/ deleteNew);

module.exports = router;