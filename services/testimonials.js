const { findAndCountAllTestimonials } = require("../DAL/testimonials")

const testimonialsServiceGet = async () => {
    const data = await findAndCountAllTestimonials()
    return data
}

module.exports = {
    testimonialsServiceGet,
}