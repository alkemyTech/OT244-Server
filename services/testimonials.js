const { findAndCountAllTestimonials } = require("../DAL/testimonials")

const testimonialsServiceGet = async (limit,offset,page) => {
    const data = await findAndCountAllTestimonials(limit,offset)
    const { count: totalItems, rows: testimonials } = data
    const currentPage = page ? +page: 0
    const totalPages = Math.ceil(totalItems / limit)
    return { totalItems, testimonials, totalPages, currentPage }
}

module.exports = {
    testimonialsServiceGet,
}