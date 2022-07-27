const { check } = require('express-validator');
const AppError = require('../errors/appErrors');
const { validationResult } = require('express-validator');


const _emailRequired = check('email', 'Email required').normalizeEmail().not().isEmpty();
const _emailValid = check('email', 'Email is invalid').normalizeEmail().isEmail();
const _passwordRequired = check('password', 'Password required').not().isEmpty();

const postLoginRequestValidations = [
    _emailRequired,
    _emailValid,
    _passwordRequired,
    validResult
]


const validResult = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        throw new AppError('Validarion Errors', 400, errors.errors);
    }
    next();
}


module.exports = {
    postLoginRequestValidations,
}