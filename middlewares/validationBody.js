const {body} = require( "express-validator" );

const activities = [
    body("name", "Name cannot be empty or accept numbers!").isString().notEmpty().trim(),
    body("content", "Content cannot be empty or accept numbers!").isString().notEmpty().trim(),
    body("image", "Image cannot be empty or accept numbers!").isString().notEmpty().trim(),
];

const bodyLogin = [
    body('email', 'Email required').normalizeEmail().not().isEmpty(),
    body('email', 'Email is invalid').normalizeEmail().isEmail(),
    body('password', 'Password required').not().isEmpty(),
];

const bodyRegister = [
    body("firstName", "Enter a valid name!").trim().notEmpty().escape(),
    body("lastName", "Enter a valid lastName!").trim().notEmpty().escape(),
    body("password", "Enter a valid password!").trim().isLength({ min: 5 }).escape(),
    body("email", "Enter a valid email!").trim().isEmail().normalizeEmail(),
];

const categories = [
    body("name", "Enter a valid name!").trim().notEmpty().isString({ min:4 }).escape(),
];

const members = [
    body("name").exists().withMessage("Name is required").isString().withMessage("Name must be a string"),
];

const news = [
    body("name", "Enter a valid name!").trim().notEmpty().escape(),
    body("content", "Enter a valid content!").trim().notEmpty().escape(),
    body("image", "Enter a image!").trim().notEmpty().escape(),
];

const testimonials = [
    body('name', 'Name is required').notEmpty(),
    body('content', 'Content is required').notEmpty(),
];

bodyUpdateCategories = [
    body('name', 'Name can not be empty and must be a string').notEmpty().isString().isLength({min: 3}).escape().optional({nullable: true}),
    body('description', 'Description can not be empty and must be a string').notEmpty().isLength({min: 10}).escape().isString().optional({nullable: true}),
    body('image', 'Image can not be empty').notEmpty().isString().isLength({min: 10}).escape().optional({nullable: true})
];

const bodyUpdateDataUser = [
  body("firstName", "Enter a valid name!").isString().isLength({min:3}).escape().optional({nullable:true}),
  body("lastName", "Enter a valid lastName!").isString().isLength({min:3}).escape().optional({nullable:true}),
  body("photo", "Enter a valid URL photo!").isString().isLength({min:10}).escape().optional({nullable:true}),
];

module.exports = {
    activities,
    bodyLogin,
    bodyRegister,
    categories,
    members,
    news,
    testimonials,
    bodyUpdateCategories,
    bodyUpdateDataUser
}