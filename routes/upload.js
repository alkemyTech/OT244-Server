const express = require("express");
const router = express.Router();
const uploadFile = require("../helpers/uploadAWS");

router.post('/', async (req, res,next) => {
    try{
        const fileLocation = await uploadFile(req.files.file);
        res.send(fileLocation);
    } catch(error) {
        next(error);
    }
})

module.exports = router;