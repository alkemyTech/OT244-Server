const { contactServices } = require("../services/backoffice")

const getContacts = async (req,res,next) => {
    try {
        const data = await contactServices()
        return res.status(200).json(data)
    } catch (error) {
        return next(error)
    }
}

module.exports = {
    getContacts,
}