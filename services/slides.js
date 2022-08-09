const { allId } = require("../DAL/slides");

const getId = async (id) => {
    const data = await allId(id)
    return data
}

module.exports = {
    getId,
}
