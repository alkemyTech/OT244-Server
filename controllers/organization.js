const { Organization } = require("../models")

const get = (req, res) => {
    //get
};

const getById = (req, res) => {
    //get by id
};

const create = (req, res) => {
    //create 
};

const updatePublicData = async (req, res, next) => {

    const { id } = req.params;
    const { name, image, address, phone, email, welcomeText, aboutUsText } = req.body;

    try {
        const updatedData = await Organization.update({
            name,
            image,
            address,
            phone,
            email,
            welcomeText,
            aboutUsText
        }, {
            where: {
                id
            }
        });

        if (updatedData != 0) {
            return res.status(200).json({
                msg: 'Public data updated successfully'
            });
        } else {
            return res.status(404).json({
                msg: 'Data not found'
            });
        }

    } catch (error) {
        next(error);
    }
};

const deleteOrg = (req, res) => {
    //delete 
};

module.exports = {
    get,
    getById,
    create,
    updatePublicData,
    deleteOrg,
}