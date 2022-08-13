const { request, response } = require("express")
const { Member } = require('../models')
const { paginationMembers } = require("../services/menber")

const createMember = async (req, res) => {
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

const updateMember = async (req, res, next) => {

    const { name, facebookUrl, instagramUrl, linkedinUrl, image, description } = req.body;

    try {

        const member = await Member.findByPk(id);

        if (!member) {
            return res.status(404).json({
                msg: 'Member not found'
            });
        }

        const updatedMember = await member.update({
            name,
            facebookUrl,
            instagramUrl,
            linkedinUrl,
            image,
            description
        });

        return res.status(200).json(updatedMember);


    } catch (error) {
        next(error);
    }
}

const getMembers = async(req = request, res = response) => {
    try {
        let { page = 0 } = req.query
        page = parseInt(page)
        
        const members = await paginationMembers(page)

        return res.json({
            members
        })
    }catch(error){        
        return res.status(500).json({
            msg: "Please contact to support",
            error
        })
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

module.exports = {
    createMember,
    getMembers,
    deleteMember,
    updateMember,
}