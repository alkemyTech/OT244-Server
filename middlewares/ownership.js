const jwt = require('jsonwebtoken');

const ownershipVerification = (req, res, next) => {

    const { id } = req?.params;
    const token = req?.headers?.authorization;

    if (!token || !id) {
        res.json('Id or token missing')
    }

    try {

        const payload = jwt.verify(token, process.env.JWT_SECRET);

        if (payload.userData.roleId == process.env.ADMIN_ROLE || id == payload.userData.id) {
            next();
        }else{
            return res.status(403).json({
                msg: 'Unauthorized'
            });
        }
    } catch (error) {
        res.status(403).json({
            msg: 'Unauthorized'
        });
    }
};

module.exports = { ownershipVerification };