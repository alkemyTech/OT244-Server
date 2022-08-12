const { Comment } = require('../models');
const { getAll } = require("./../services/comments")

const createComments = async (req, res,next) => {  
    const { body, user_id, news_id } = req.body;
    try{
        await Comment.create({
            body,
            user_id,
            news_id
        });
        res.status(201);  
    }catch(err){
        next(err);
    }
}

const getComments = async(req, res, next) => {
    const data = await getAll()
    try{
        return res.status(200).json({
            data
        })
    }catch(error){
        next(error)
    }
}

module.exports = {
    createComments,
    getComments
}