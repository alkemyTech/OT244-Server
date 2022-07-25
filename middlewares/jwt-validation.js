const jwt = require('jsonwebtoken');
const { User } = require('../models/user');

const validateToken = (req, res, next) => {

    const token = req?.headers?.authorization;

    if (!token) {
        return res.status(401).json({
            msg: 'There is no token'
        });
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET);

        next();

    } catch (error) {
        console.log(error)
        return res.status(401).json({
            msg: 'Invalid token'
        });
    }

    //Adding jsonwebtoken decode 

    try {
        const decoded = jwt.decode(token);
        const user = await User.findByPk(decoded.id);

        if (!user) {
            return res.status(403).json({
                msg: 'Access denied'
            });
        }

        // Role validation goes here or in another middleware file

        next();

    } catch (error) {
        console.log(error);
        return res.json(404)
    }
};

module.exports = validateToken;