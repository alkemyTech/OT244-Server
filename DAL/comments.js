const { Comment } = require("./../models")

const findAll = async( order ) => {
    const comments = await Comment.findAll({
        order: order,
        attributes: ['body']
    })
    return comments
}

module.exports = {
    findAll
}