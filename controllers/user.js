const {User} = require("../models")

const getDataUser= (req, res) => {
  const user= req.user
  if (user) {
    return res.status(200).json(user)
  }
    else{
        return res.status(500).json({ msg: "An unexpected error occurred" });
   }
}

const deleteUser = async (req,res) => {
    const { id } = req.params;
    try{
        await User.destroy({
            where: { id }
        });
        res.sendStatus(200)        
    }catch(error){
        res.status(500).json({ message: error.message });
    }
    
}

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
  deleteUser,
  getDataUser,
  updateUserById,
}
