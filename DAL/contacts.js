const { contacts } = require("./../models")

const createContact = async( name, phone, email, message  ) => {
    const [contact, created] = await contacts.findOrCreate({
        where: { email },
        defaults: {
            name,
            phone,            
            email,
            message
        }
    })
    return created
}

module.exports = {
    createContact
}