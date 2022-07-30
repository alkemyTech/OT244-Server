const { Member } = require('../models');

const checkMember = async (req,res,next) => {
    try{
        const member = await Member.findByPk(req.params.id);
        if(!member){
            throw new Error("Member doesn't exist");
        }
        next();
    }
    catch(err){
        next(err);
    }
}
module.exports = checkMember;