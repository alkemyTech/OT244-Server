const { request, response } = require( "express" );
const jwt = require('jsonwebtoken');

module.exports = ( req = request, res = response, next ) => {
    try {
        const bearerHeader = req.headers['authorization'];        
        if(bearerHeader){        
            const token = bearerHeader.split(" ")[1];
            req.token = token
            jwt.verify(token, process.env.JWT_SECRET, (error, data) => {
                if(error){
                    return res.status(403).json({
                        msg: 'Token doesnt belong to any user',
                        
                    })
                }else{
                    req.user = data
                    next();
                }
            })
        }else{
            return res.status(403).json({
                msg: 'Token is not valid!'
            })
        } 
    } catch (error) {
        return res.status(403).json({
            msg: 'Token or security sign are invalids!',
            error
        })
    }   
}