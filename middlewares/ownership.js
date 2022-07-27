const jwt = require('jsonwebtoken');

const ownershipVerification = (req, res, next) => {

    const { id } = req?.params;
    const token = req?.headers?.authorization;

    const ADMIN_ROLE = 1;

    if (!token || !id) {
        res.json('Id or token missing')
    }

    try {

        const payload = jwt.verify(token, process.env.JWT_SECRET);

        if (payload.roleId === ADMIN_ROLE || id === payload.id) {

            next();
        }

        return res.status(403).json({
            msg: 'Unauthorized'
        });


    } catch (error) {
        res.status(403).json({
            msg: 'Unauthorized'
        });
    }
};

module.exports = { ownershipVerification };