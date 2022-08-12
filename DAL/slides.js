const {Slides} = require("../models");

const findOneSlideById =  async (id) => {
    const category = await Slides.findOne({
        where: { id },
        attributes: {
          exclude: [ 'id', 'deletedAt', 'createdAt', 'updatedAt' ]
        }     
    })
    return category    
}

module.exports = {
    findOneSlideById,
}