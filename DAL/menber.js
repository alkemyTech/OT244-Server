const { Member } = require("../models");


const getMembersToDb = async (currentPage, numberMembers) => {
  const members = await Member.findAndCountAll({
    limit: parseInt(numberMembers),
    offset:parseInt(currentPage * numberMembers),
    attributes: ["name", "image", "description"]
  })
  return members
}


module.exports = {
  getMembersToDb,
}