const { dalGetTestimonials } = require("../DAL/testimonials")

const servicesGetTestimonial = async () => {
    const data = await dalGetTestimonials()
    return data
}

module.exports = {
    servicesGetTestimonial,
}