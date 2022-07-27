const { User } = require("../models");

const findByEmail = async(email) => {
    return await User.findOne({ where: { email } });
}


module.exports = {
    findByEmail,
}