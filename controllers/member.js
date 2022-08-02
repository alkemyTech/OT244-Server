const { Member } = require('../models')

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

module.exports = { createMember, updateMember }