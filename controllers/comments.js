const { Comment } = require('../models');
const { putCommentService, getAll } = require("./../services/comments")


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
    const { id } = req.params
    const { body } = req.body
    try{
          const data = await putCommentService( id, body )
          if(data){
              return res.status(200).json({
                  msg: 'Comment updated successfully'
              })
          }else{
              res.status(404).json({
                  msg: 'There isnt any comment for update'
              })
        }
        }catch(error){
        next(error)
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
    putComment,
    getComments
}