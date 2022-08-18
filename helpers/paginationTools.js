const prevPage = (location,currentPage,totalPages) => {
    if(currentPage > 0 && currentPage < totalPages){
        return `${process.env.BASE_URL+location}?page=${currentPage-1}`
    }
}

const nextPage = (location,currentPage,totalPages) => {
    if(currentPage < (totalPages-1)){
        return `${process.env.BASE_URL+location}?page=${currentPage+1}`
    }
}

// reformulando funciones prev and next page

const prevAndNextPages = (location, currentPage, totalPages) => {
    const pages = {
        prev: null,
        next: null,
    }
    if (totalPages === 1) {
        return pages
    }
    
    if (currentPage < totalPages - 1) {
        let next = currentPage + 1
        pages.next = `${process.env.BASE_URL + location}?page=${next}`;
    }

    if (currentPage > 0 && currentPage<=totalPages) {
        let prev = currentPage - 1
        pages.prev = `${process.env.BASE_URL + location}?page=${prev}`;
    }

    return pages

};

module.exports = { prevPage,nextPage, prevAndNextPages, };