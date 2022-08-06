const { Comment } = require('../models');

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

module.exports = createComments;