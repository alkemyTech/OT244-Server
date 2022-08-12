const { createContact } = require("../DAL/contacts")

const createNewContact = async( name, phone, message, email ) => {
    const data = await createContact( name, phone, message, email )
    return data
}

module.exports = {
    createNewContact
}