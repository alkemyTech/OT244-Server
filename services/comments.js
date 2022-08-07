const { putComment } = require("./../DAL/comments")

const putCommentService = async( req, res ) => {
    const { id } = req.params
    const { body } = req.body
    const data = await putComment( id, body )

    if(data.includes(0)){
        return res.status(404).json({
            msg: 'There isnt any comment for update'
        })
    }else{
        return data
    }   
}

module.exports = {
    putCommentService
}