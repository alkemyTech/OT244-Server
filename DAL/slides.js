const {Slides} = require("../models");

const findAllSlidesById =  async (id) => {
    const category = await Slides.findOne({
        where: { id },
        attributes: {
          exclude: [ 'id', 'deletedAt', 'createdAt', 'updatedAt' ]
        }     
    })
    return category    
}

module.exports = {
    findAllSlidesById,
}