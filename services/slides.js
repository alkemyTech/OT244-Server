const { findOneSlideById , findById} = require("../DAL/slides");

const getId = async (id) => {
    const data = await findOneSlideById(id)
    return data
}
const associate = async (idslider, idorganization)=>{
    const organization = await findById(idorganization);
    const slider = await findById(idslider);
    await slider.addOrganization(organization);
  
  }
module.exports = {
    getId,
    associate,
}
