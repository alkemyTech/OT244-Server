const { putComment } = require("./../DAL/comments")

const putCommentService = async( id, body ) => {    
    const data = await putComment( id, body )

    if(data.includes(0)){
        return false
    }else{
        return data
    }   
}

module.exports = {
    putCommentService
}