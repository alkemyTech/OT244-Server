const { request, response } = require( "express" );
const jwt = require('jsonwebtoken');

const validateJWT = ( req = request, res = response, next ) => {
    const token = req.header('x-token');
    if(!token){
        return res.status(403).json({
            msg: 'Token is not valid!'
        })
    }
    try {
        const { id, firstName, lastName, email, photo, roleId } = jwt.verify(token, process.env.JWT_SECRET);
        req.id = id;
        req.firstName = firstName;
        req.lastName = lastName;
        req.email = email;
        req.photo = photo;
        req.roleId = roleId;
    } catch (error) {
        return res.status(403).json({
            msg: 'Token or security sign are invalids!',
            error
        })
    }
    next();
}

module.exports = validateJWT;