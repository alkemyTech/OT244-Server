const {Slide} = require("../models");

const findOneSlideById =  async (id) => {
    const slide = await Slide.findOne({
        where: { id },
        attributes: {
          exclude: [ 'id', 'deletedAt', 'createdAt', 'updatedAt' ]
        }     
    })
    return slide   
}

const findById = async (id) => {
    return await Slide.findByPk(id);
  }

module.exports = {
    findOneSlideById,
    findById,
}