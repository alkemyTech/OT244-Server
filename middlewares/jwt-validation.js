const jwt = require('jsonwebtoken');

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
        return res.status(401).json({
            msg: 'Invalid token'
        });
    }
};

module.exports = validateToken;