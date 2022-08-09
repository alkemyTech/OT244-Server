const { findAll } = require("./../DAL/comments")

const getAll = async() => {
    let dateOrder = []
    dateOrder.push([ 'createdAt', 'DESC' ])
    const data = await findAll( dateOrder )
    return data  
}

module.exports = {
    getAll
}