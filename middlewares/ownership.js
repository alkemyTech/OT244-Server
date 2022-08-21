

const ownershipVerification = (req, res, next) => {

    const  idUser  = req.user.userData.roleId.toString()
    const { id } = req.params

    try {
        
        if (idUser === process.env.ADMIN_ROLE || id === idUser) {
            next();
        }else{
            return res.status(403).json({
                msg: 'Unauthorized',
            });
        }
    } catch (error) {
        res.status(403).json({
            msg: 'Unauthorized'
        });
    }
};

module.exports = { ownershipVerification };