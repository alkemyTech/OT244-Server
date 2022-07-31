const { News } = require("../models");

const checkNew = async(req, res, next) => {
    const { id } = req.params
    try{
        const myNew = await News.findAll({
            where: { id }
        });      
        if(!myNew || myNew.length === 0){
            res.status(404).json({
                msg: "The new doesnt exist or it had been deleted"
            })
        }else{
            next()
        }           
    }catch(error){
        next(error);
    }
}

module.exports = { checkNew }