const { listService } = require("../services/contacts")

const getContacts = async (req, res) => {
    const Data = await listService()
    if (!listData) res.status(404).json('Emails not found')
    else res.status(201).json(listData)
}

module.exports = {
    getContacts,
}