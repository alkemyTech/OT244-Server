const transporter = require('../config/mailer')

const sendEmail = async (from,to,subject,html) => {
    await transporter.sendMail({
      from,
      to,
      subject,
      html 
    })
  }

module.exports = sendEmail