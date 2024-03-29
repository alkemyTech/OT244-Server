const { contacts } = require('../models');
const ejs = require('ejs')
const path = require('path');
const sendEmail = require("../helpers/mailer");
const { createNewContact } = require("../services/contacts")

const addContact = async( req, res, next ) => {
    const { name, phone, email, message  } = req.body

    try{
        const data = await createNewContact(name, phone, email, message)
        if(data){
            const msg = {
                title: "Bienvenid@ al proyecto Somos Más",
                content: email + "," + " Recibimos tu contacto con exito",
            }
            const infoTemplate = await ejs.renderFile(`${path.join(__dirname, '../views/plantilla-email.ejs')}`,{message : msg})            
            sendEmail('"OT244 #DarkCode 👻" <foo@example.com>',email,"Somos Más", infoTemplate)
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
