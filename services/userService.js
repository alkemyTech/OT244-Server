const User = require('../models/user');

const findByEmail = async(email) => {
    return await User.findOne({ where: { email } });
}


module.exports = {
    findByEmail,
}