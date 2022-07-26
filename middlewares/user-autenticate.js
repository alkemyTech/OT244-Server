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
        jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        console.log(error);
        return res.status(403).json({
            msg: 'Token or security sign are invalids!'
        })
    }
    next();
}

module.exports = validateJWT;