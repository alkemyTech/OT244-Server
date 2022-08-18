const {Slides} = require("../models");

const findOneSlideById =  async (id) => {
    const slide = await Slides.findOne({
        where: { id },
        attributes: {
          exclude: [ 'id', 'deletedAt', 'createdAt', 'updatedAt' ]
        }     
    })
    return slide   
}

module.exports = {
    findOneSlideById,
}