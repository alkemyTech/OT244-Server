const { createContact } = require("../DAL/contacts")

const createNewContact = async( req, res ) => {
    const { name, phone, message, email } = req.body
    const data = createContact( name, phone, message, email )
    return data
}

module.exports = {
    createNewContact
}