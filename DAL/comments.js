const { Comments } = require("./../models/comments")
const { Categories } = require("./../models/categories")

const findAll = async( order ) => {
    const comments = await Categories.findAll({
        order: order,
        attributes: ['body']
    })
    return comments
}

module.exports = {
    findAll
}