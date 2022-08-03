const { Member } = require('../models')

const createMember = async (req,res) => {
    const { name, 
        facebookUrl,
        instagramUrl,
        linkedinUrl,
        image,
        description 
    } = req.body

    try {
        const member = await Member.create({
            name,
            facebookUrl,
            instagramUrl,
            linkedinUrl,
            image,
            description
        })
        res.status(201).json(member)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteMember = async (req,res,next) => {
    const { id } = req.params;
    try{
        const deleted = await Member.destroy({ where: { id } });
        if(deleted) {
            res.sendStatus(200);
        }else{
            throw new Error('Member not found');
        }
    
    }
    catch(error){
        next(error);
    }    
}

module.exports = {createMember, deleteMember}