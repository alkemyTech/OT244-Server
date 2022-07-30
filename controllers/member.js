const { request, response } = require("express")
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

const getMembers = async(req = request, res = response) => {
    try{
        const members = await Member.findAll({
            attributes: ["name", "image", "description"]
        })
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

module.exports = {
    createMember,
    getMembers
}