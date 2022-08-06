require('dotenv').config()

module.exports = (req, res, next) => {
    if (String(req.user.userData.roleId) !== String(process.env.ADMIN_ROLE)) {
        return res.status(401).json({ message: "You are not authorized to perform this action!" });
    }
    next();
}