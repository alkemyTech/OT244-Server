const {User} = require("../models")

const updateUserById = async (req, res, next) => { 
  const { id } = req.params
  const {
    firstName,
    lastName,
    photo,
  } = req.body

  try {
    const updatedUser =  await User.update({
        firstName,
        lastName,
        photo,
      },
      {
        where:{
          id,
          }
      });
      
    if(updatedUser[0]){
       
      return res.status(200).json({msg:"User update successfully!"})
    }
    
    return res.status(404).json({msg:"User not found!"})
    

  } catch (error) {
    next(error)
  }
} 



module.exports = {
  updateUserById,
}
