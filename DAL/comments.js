const { Comment } = require("./../models")

const putComment = async( id, body ) => {
    const comment = await Comment.update({
        body: body
    }, {
        where: { id }
    })
    
    return comment
    
}

const findAll = async( order ) => {
    const comments = await Comment.findAll({
        order: order,
        attributes: ['body']
    })
    return comments
}

module.exports = {
    putComment,
    findAll
}