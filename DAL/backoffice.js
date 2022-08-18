const {Contacts} = require('../models')

const findAllContacts = async () => {
    const contacts = await Contacts.findAll({
        attributes: {
            exclude: [ 'id', 'deletedAt', 'createdAt', 'updatedAt' ]
        },
    })
    return contacts
}

module.exports = {
    findAllContacts,
}