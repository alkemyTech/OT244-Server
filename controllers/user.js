const { User } = require('../models');

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

module.exports = deleteUser;