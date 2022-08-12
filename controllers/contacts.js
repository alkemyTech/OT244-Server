const { Contact } = require('../models');

const getContacts = async (req, res, next) => {

    try {

        const contacts = await Contact.findAll();

        return res.status(200).json(contacts);

    } catch (error) {
        next(error)
    }
};


module.exports = { getContacts };
