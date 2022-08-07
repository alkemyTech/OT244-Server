const express = require('express')
const { listAll } = require('../controllers/contacts')
const router = express.Router()

router.get('/', listAll)

module.exports = router