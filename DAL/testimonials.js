const {Testimonials,Categories} = require('../models')

const findAndCountAllTestimonials = async (limit,offset) => {
    const data = await Categories.findAndCountAll({
        attributes: {
            exclude: [ 'id', 'deletedAt', 'createdAt', 'updatedAt' ]
        },
        limit: limit,
        offset: offset, 
    })
    return data
}

module.exports = {
    findAndCountAllTestimonials,
}