const transporter = require('../config/mailer')

const sendEmail = async (from,to,subject,html) => {
    await transporter.sendMail({
      from, // sender address
      to, // list of receivers
      subject, // Subject line
      html // HTML 
    })
  }

module.exports = sendEmail