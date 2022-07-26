const bcrypt = require('bcrypt');
const AppError = require('../errors/appErrors');
const userService = require('./userService');



const login = async(email, password) => {
    try {
        //Validación de email
        const user = await userService.findbyEmail(email);

        if(!user){
            throw new AppError('Authentication failed! Email / password does not correct.', 401);
        }

        //Validación de password
        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword) {
            throw new AppError('Authentication failed! Email / password does not correct.', 401);
        }

        return {

            user: user.name,
            role: user.role
        }

    }catch(error) {
        throw error;
    }

}


module.exports = {
    login,
}