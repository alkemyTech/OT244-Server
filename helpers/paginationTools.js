const prevPage = (currentPage,totalPages) => {
    if(currentPage > 0 && currentPage < totalPages){
        return `${process.env.BASE_URL}categories?page=${currentPage-1}`
    }
}

const nextPage = (currentPage,totalPages) => {
    if(currentPage < totalPages){
        return `${process.env.BASE_URL}categories?page=${currentPage+1}`
    }
}

module.exports = { prevPage,nextPage };