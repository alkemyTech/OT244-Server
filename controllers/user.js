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
    if(updatedUser){
       
      return res.status(201).json({msg:"User update successfully!"})
    }
    else{
      return res.status(404).json({msg:"User not found!"})
    }

  } catch (error) {
    next(error)
  }
} 



module.exports = {
  updateUserById,
}
