const { createContact } = require("../DAL/contacts")

const createNewContact = async( name, phone, email, message ) => {
    const data = await createContact( name, phone, email, message  )
    return data
}

module.exports = {
    createNewContact
}