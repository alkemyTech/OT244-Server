const {Testimonials} = require('../models')

const findAndCountAllTestimonials = async () => {
    const data = await Testimonials.findAndCountAll({
        attributes: {
            exclude: [ 'id', 'deletedAt', 'createdAt', 'updatedAt' ]
        },
        limit: 10, 
    })
    return data
}

module.exports = {
    findAndCountAllTestimonials,
}