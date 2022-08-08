const {Testimonials} = require('../models')

const dalGetTestimonials = async () => {
    const data = await Testimonials.findAndCountAll({
        attributes: {
            exclude: [ 'id', 'deletedAt', 'createdAt', 'updatedAt' ]
        },
        limit: 10, 
    })
    return data
}

module.exports = {
    dalGetTestimonials,
}