const verifyAdmin = (req, res, next) => {
    if (req.user.roleId !== process.env.ADMIN_ROLE) {
        return res.status(401).json({ message: "You are not authorized to perform this action!" });
    }
    next();
}

module.exports = verifyAdmin;