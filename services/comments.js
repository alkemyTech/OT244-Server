const { putComment, findAll } = require("./../DAL/comments")

const putCommentService = async( id, body ) => {    
    const data = await putComment( id, body )

    if(data.includes(0)){
        return false
    }else{
        return data
    }   
}

const getAll = async() => {
    let dateOrder = []
    dateOrder.push([ 'createdAt', 'DESC' ])
    const data = await findAll( dateOrder )
    return data  
}

module.exports = {
    putCommentService,
    getAll
}