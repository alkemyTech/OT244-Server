const { body, validationResult } = require("express-validator");

// validations
const bodyFieldsCreateNews = [
  body("name", "Enter a valid name!").trim().notEmpty().escape(),
  body("content", "Enter a valid content!").trim().notEmpty().escape(),
  body("image", "Enter a image!").trim().notEmpty().escape(),
];

// middleware.
const validateFieldsCreateNews = (req, res, next) => {
  // if error..
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};
module.exports = { validateFieldsCreateNews, bodyFieldsCreateNews };
