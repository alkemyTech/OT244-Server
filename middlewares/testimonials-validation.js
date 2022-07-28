const { body, validationResult } = require('express-validator');

const bodyFields = [
    body('name', 'Name is required').notEmpty(),
    body('content', 'Content is required').notEmpty(),
];


const fieldsValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    next();
};

module.exports = { bodyFields, fieldsValidation };