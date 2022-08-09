const { getListData } = require("../DAL/contacts")

const listService = async () => {
    const data = await getListData()
    return data
}

module.exports = {
    listService,
}