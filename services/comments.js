const { putComment } = require("./../DAL/comments")

const putCommentService = async( id, body ) => {    
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