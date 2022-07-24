const verifyAdmin = (req, res, next) => {
    if (req.user.roleId !== 1) {
        return res.status(401).json({ message: "You are not authorized to perform this action!" });
    }
    next();
}

module.exports = verifyAdmin;