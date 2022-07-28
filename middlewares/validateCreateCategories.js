const { body } = require("express-validator");

const bodyFieldsCreateCategory = body("name", "Enter a valid name!")
  .trim()
  .notEmpty()
  .isString({ min:4})
  .escape();
module.exports = bodyFieldsCreateCategory;
