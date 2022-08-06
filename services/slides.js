const { allId } = require("../DAL/slides");

const getId = async (req) => {
    const { id } = req.params;
    const data = await allId(id)
    return data
}

module.exports = {
    getId,
}
