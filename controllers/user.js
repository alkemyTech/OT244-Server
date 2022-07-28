


const getDataUser= (req, res) => {
  const user= req.user
    if(user){
       return res.status(200).json(user)
    
    else{
        return res.status(500).json({ msg: "An unexpected error occurred" });
   }
}

module.exports = {
  getDataUser
}
