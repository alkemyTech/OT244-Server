const { listService } = require("../services/contacts")

const listAll = async (req, res) => {
    const listData = await listService(req)
    res.status(201).json(listData)
}

module.exports = {
    listAll,
}