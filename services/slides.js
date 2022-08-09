const { findAllSlidesById } = require("../DAL/slides");

const getId = async (id) => {
    const data = await findAllSlidesById(id)
    return data
}

module.exports = {
    getId,
}
