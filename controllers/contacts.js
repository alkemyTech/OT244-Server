const { contacts } = require('../models');
const { createNewContact } = require("../services/contacts")

const addContact = async( req, res, next ) => {
    const { name, phone, message, email } = req.body
    try{
        const data = await createNewContact(name, phone, message, email)
        if(data){
            return res.status(200).json({
                msg: 'Contact created successfully'
            })
        }else{
            return res.status(400).json({
                msg: 'This email is already exist in any contact'
            })
        }

    }catch(error){
        next(error)
    }
}

const getContacts = async (req, res, next) => {

    try {

        const contact = await contacts.findAll();

        return res.status(200).json(contact);

    } catch (error) {
        next(error)
    }
};

module.exports = { 
    addContact,
    getContacts,
}