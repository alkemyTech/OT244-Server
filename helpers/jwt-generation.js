const jwt = require('jsonwebtoken');

const generateToken = (userData = {}) => {

    try {
        const payload = { userData };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '1d'
        });

        return token;

    } catch (error) {
        return false;
    }
};

module.exports = generateToken;