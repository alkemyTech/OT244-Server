const { getMembersToDb } = require("../DAL/menber")
const { prevAndNextPages } = require("../helpers/paginationTools")

const NUMBER_MEMBERS = 10 

const paginationMembers = async(currentPage) => {
  const data = await getMembersToDb(currentPage, NUMBER_MEMBERS)
  const totalPage = Math.ceil(data.count / NUMBER_MEMBERS)
  const nextAndPrevPath = prevAndNextPages("members", currentPage, totalPage)
  
  const dataMembers = {
    totalPage,
    data: data.rows,
    ...nextAndPrevPath,
  }
  
  return dataMembers
}

module.exports = {
  paginationMembers,
}