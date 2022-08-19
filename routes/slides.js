const express = require('express')
const userAuthenticate = require('../middlewares/user-authenticate')
const verifyAdmin = require("../middlewares/verifyAdmin")
const { postSlides, getSlides, getSlidesId, deleteSlides, associeteOrganization,getSlidesAssoOrg } = require('../controllers/slides')
const router = express.Router()


///:id(\\d+)/ con esto hago que sea numero si o si el id que envio

router.post('/', userAuthenticate, verifyAdmin, postSlides)
router.get('/', userAuthenticate, verifyAdmin, getSlides)
router.get('/:id', userAuthenticate, verifyAdmin, getSlidesId)
router.delete('/:id', userAuthenticate, verifyAdmin, deleteSlides)
router.put('/:idslider(\\d+)/organizations/:idorganization(\\d+)/',userAuthenticate,associeteOrganization);
router.get('organizations/:idorganization(\\d+)/slider',userAuthenticate,getSlidesAssoOrg)

module.exports = router