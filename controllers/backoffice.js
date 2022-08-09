const { listService } = require("../services/contacts")

const listAll = async (req, res) => {
    const listData = await listService()
    if (!listData) res.status(404).json('Emails not found')
    else res.status(201).json(listData)
}

module.exports = {
    listAll,
}