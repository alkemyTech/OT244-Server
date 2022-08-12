const express = require('express');
const { updatePublicData } = require('../controllers/organization');
const userAuthenticate = require('../middlewares/user-authenticate');
const { updateOrganizationData } = require('../middlewares/validationBody');
const validationResult = require('../middlewares/validationResult');
const verifyAdmin = require('../middlewares/verifyAdmin');

const router = express.Router();


router.post('/public/:id',
    userAuthenticate,
    verifyAdmin,
    updateOrganizationData,
    validationResult,
    updatePublicData);

module.exports = router;