const { findAndCountAllTestimonials } = require("../DAL/testimonials")
const { nextPage, prevPage } = require("../helpers/paginationTools")

const testimonialsServiceGet = async (page,size) => {
    const limit = size ? +size : 10
    const offset = page ? page * limit : 0
    const data = await findAndCountAllTestimonials(limit,offset)
    const { count: totalItems, rows: testimonials } = data
    const currentPage = page ? +page: 0
    const totalPages = Math.ceil(totalItems / limit)
    const next = nextPage('testimonials', currentPage, totalPages)
    const prev = prevPage('testimonials', currentPage, totalPages)
    return { totalItems, testimonials, next, prev }
}

module.exports = {
    testimonialsServiceGet,
}