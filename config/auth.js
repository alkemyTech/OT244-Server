require('dotenv').config()

module.exports = {
    rounds: process.env.AUTH_ROUNDS,
    admin: process.env.AUTH_PASSWORD_ADMIN,
    standard: process.env.AUTH_PASSWORD_STANDARD,
}