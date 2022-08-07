const { findAll } = require("./../DAL/comments")

const getAll = async(req) => {
    let dateOrder = []
    const order = req.query
    if( order === 'ASC' ){
        dateOrder.push([ 'createdAt', 'ASC' ])
        const data = await findAll( dateOrder )
        return data
    }else{
        dateOrder.push([ 'createdAt', 'DESC' ])
        const data = await findAll( dateOrder )
        return data
    }    
}

module.exports = {
    getAll
}