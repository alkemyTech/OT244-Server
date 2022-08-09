const { findAllContacts } = require("../DAL/backoffice")

const contactServices = async () => {
    const data = await findAllContacts()
    return data
}

module.exports = {
    contactServices,
}