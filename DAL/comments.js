const { Comment } = require("./../models")

const putComment = async( id, body ) => {
    const comment = await Comment.update({
        body: body
    }, {
        where: { id }
    })
    
    return comment
    
}

module.exports = {
    putComment
}