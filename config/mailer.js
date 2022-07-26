const nodemailer = require('nodemailer')
require('dotenv').config()

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.MAILER_USER, // generated ethereal user
        pass: process.env.MAILER_PASS, // generated ethereal password
    },
});

transporter.verify()

module.exports = transporter