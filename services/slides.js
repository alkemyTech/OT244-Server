const { findOneSlideById } = require("../DAL/slides");

const getId = async (id) => {
    const data = await findOneSlideById(id)
    return data
}

module.exports = {
    getId,
}
