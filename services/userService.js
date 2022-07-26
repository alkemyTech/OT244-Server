const User = require('../models/user');
const repository = new UserRepository();


const findById = async(id) => {
    return await User.findByPk(id);
}

const findByEmail = async(email) => {
    return await User.findOne({ where: { email } });
}


module.exports = {
    findById,
    findByEmail,
}