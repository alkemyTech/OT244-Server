const {Contacts} = require('../models')

const getListData = async () => {
    const contacts = await Contacts.findAll({attributes: ['email']})
    return contacts
}

module.exports = {
    getListData,
}