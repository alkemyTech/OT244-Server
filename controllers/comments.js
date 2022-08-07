const { Comment } = require('../models');
const { putCommentService } = require("./../services/comments")

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

const putComment = async(req, res, next) => {
    try{
        const data = await putCommentService( req, res )
        if(data){
            return res.status(200).json({
                msg: 'Comment updated successfully'
            })
        }        
    }catch(error){
        next(error)
    }
}

module.exports = {
    createComments,
    putComment
}