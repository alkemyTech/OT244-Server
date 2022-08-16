const prevPage = (location,currentPage,totalPages) => {
    if(currentPage > 0 && currentPage < totalPages){
        return `${process.env.BASE_URL+location}categories?page=${currentPage-1}`
    }
}

const nextPage = (location,currentPage,totalPages) => {
    if(currentPage < totalPages){
        return `${process.env.BASE_URL+location}categories?page=${currentPage+1}`
    }
}

module.exports = { prevPage,nextPage };