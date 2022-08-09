const {Slides, Categories} = require("../models");

const allId =  async (id) => {
    const category = await Categories.findOne({
        where: { id },
        attributes: {
          exclude: [ 'id', 'deletedAt', 'createdAt', 'updatedAt' ]
        }     
    })
    return category    
}

module.exports = {
    allId,
}