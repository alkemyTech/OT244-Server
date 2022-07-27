const { check, validationResult } = require( "express-validator" );

const bodyFieldsCreateActivity = [
    check("name", "Name cannot be empty or accept numbers!").isString().notEmpty().trim(),
    check("content", "Content cannot be empty or accept numbers!").isString().notEmpty().trim(),
    check("image", "Image cannot be empty or accept numbers!").isString().notEmpty().trim()
]

const validateFieldsCreateActivity = (req, res, next) => {
    // if error..
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next();
};

module.exports = {
    bodyFieldsCreateActivity,
    validateFieldsCreateActivity
  }