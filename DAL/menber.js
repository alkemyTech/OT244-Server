const { Member } = require("../models");


const getMembers = async (currentPage, numberMembers) => {
  const members = await Member.findAndCountAll({
    limit: parseInt(numberMembers),
    offset:parseInt(currentPage * numberMembers),
    attributes: ["name", "image", "description"]
  })
  return members
}


module.exports = {
  getMembers,
}