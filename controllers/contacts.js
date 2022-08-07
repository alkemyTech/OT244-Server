const { createNewContact } = require("../services/contacts")

const addContact = async( req, res, next ) => {
    try{
        const data = await createNewContact(req, res)
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

module.exports = { 
    addContact
}