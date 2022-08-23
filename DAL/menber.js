const { Member } = require("../models");


const getMembers = async (currentPage, numberMembers) => {
  const members = await Member.findAndCountAll({
    limit: parseInt(numberMembers),
    offset: parseInt(currentPage * numberMembers),
    attributes: [
      "name",
      "image",
      "description",
      "facebookUrl",
      "instagramUrl",
      "linkedinUrl",
    ],
  });
  return members
}


module.exports = {
  getMembers,
}