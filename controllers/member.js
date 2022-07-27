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

module.exports = {createMember}