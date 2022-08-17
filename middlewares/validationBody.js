const { body } = require("express-validator");

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
    body("name", "Enter a valid name!").trim().notEmpty().isString({ min: 4 }).escape(),
]

const members = [
    body("name").exists().withMessage("Name is required").isString().isLength({ min: 3 }).withMessage("Name must be a string"),
];

const news = [
    body("name", "Enter a valid name!").trim().isString().isLength({ min: 3 }).notEmpty().escape(),
    body("content", "Enter a valid content!").trim().notEmpty().isString().isLength({ min: 10 }).escape(),
    body("image", "Enter a image!").trim().notEmpty().isString().isLength({ min: 10 }).escape(),
]

const testimonials = [
    body('name', 'Name is required').notEmpty(),
    body('content', 'Content is required').notEmpty(),
];

const bodyUpdateActivityById = [
    body("name", "Name cannot be empty or accept numbers!").isString().isLength({ min: 3 }).escape().optional({ nullable: true }),
    body("content", "Content cannot be empty or accept numbers!").isString().isLength({ min: 10 }).escape().optional({ nullable: true }),
    body("image", "Image cannot be empty or accept numbers!").isString().isLength({ min: 10 }).escape().optional({ nullable: true }),
];

const comments = [
    body('news_id').exists().withMessage("News id is required"),
    body('user_id').exists().withMessage("User id is required"),
    body('body').exists().withMessage("Body is required"),
];

const bodyUpdateCategories = [
    body('name', 'Name can not be empty and must be a string').notEmpty().isString().isLength({ min: 3 }).escape().optional({ nullable: true }),
    body('description', 'Description can not be empty and must be a string').notEmpty().isLength({ min: 10 }).escape().isString().optional({ nullable: true }),
    body('image', 'Image can not be empty').notEmpty().isString().isLength({ min: 10 }).escape().optional({ nullable: true })
];

const bodyUpdateDataUser = [
    body("firstName", "Enter a valid name!").isString().isLength({ min: 3 }).escape().optional({ nullable: true }),
    body("lastName", "Enter a valid lastName!").isString().isLength({ min: 3 }).escape().optional({ nullable: true }),
    body("photo", "Enter a valid URL photo!").isString().isLength({ min: 10 }).escape().optional({ nullable: true }),
];

const contacts = [
    body("name", "Enter a valid name!").trim().isString().isLength({min:3}).notEmpty().escape(),
    body("phone", "Enter a valid phone").trim().isNumeric().optional(),
    body("message", "Enter a valid message!").trim().isString().optional(),
    body("email", "Enter a valid email!").trim().isEmail().normalizeEmail().notEmpty()
]

const updateOrganizationData = [
    body('name', 'Name cannot be empty and must be a string').isString().isLength({ min: 3 }).escape().optional({ nullable: true }),
    body('image', 'Image cannot be empty and you must send a valid URL').isString().isLength({ min: 10 }).escape().optional({ nullable: true }),
    body('address', 'Address cannot be empty').isLength({ min: 10 }).escape().optional({ nullable: true }),
    body('phone', 'Phone cannot be empty and you only can send numbers').isLength({ min: 8 }).isNumeric().escape().optional({ nullable: true }),
    body('email', 'Email cannot be empty').isString().isLength({ min: 10 }).escape().optional({ nullable: true }),
    body('welcomeText', 'Welcome text cannot be empty').isString().isLength({ min: 10 }).escape().optional({ nullable: true }),
    body('aboutUsText', 'About us text cannot be empty').isString().isLength({ min: 10 }).escape().optional({ nullable: true }),
]

module.exports = {
    activities,
    bodyLogin,
    bodyRegister,
    categories,
    comments,
    members,
    news,
    testimonials,
    bodyUpdateActivityById,
    bodyUpdateCategories,
    bodyUpdateDataUser,
    contacts,
    updateOrganizationData,
}