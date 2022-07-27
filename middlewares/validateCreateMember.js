const { body, validationResult } = require("express-validator");

const bodyFields = [
    body("name")
        .exists()  
        .withMessage("Name is required")
        .isString()
        .withMessage("Name must be a string")
]

const validateFields = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}

module.exports = { bodyFields, validateFields };