const { body, validationResult } = require("express-validator");

// validations
const bodyFields = [
  body("firstName", "Enter a valid name!").trim().notEmpty().escape(),
  body("lastName", "Enter a valid lastName!").trim().notEmpty().escape(),
  body("password", "Enter a valid password!").trim().isLength({ min: 5 }).escape(),
  body("email", "Enter a valid email!").trim().isEmail().normalizeEmail(),
];

// middleware.
const validateFields = (req, res, next) => {
  // if error..
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};
module.exports = { validateFields, bodyFields };
