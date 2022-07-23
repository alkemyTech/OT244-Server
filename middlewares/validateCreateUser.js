const { body, validationResult } = require("express-validator");

// validations
const bodyFields = [
  body("name", "Enter a valid name!").trim().notEmpty().escape(),
  body("lastname", "Enter a valid lastname!").trim().notEmpty().escape(),
  body("password", "Enter a valid password!")
    .trim()
    .isLength({ min: 8 })
    .escape(),
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
