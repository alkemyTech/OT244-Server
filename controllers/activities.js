const { Activities } = require("../models");

const addActivity = async (req, res) => {
    const { name, content, image } = req.body;
    try{        
        const activitie = await Activities.create({
            name: name,
            content: content,
            image: image
        })
        if( !activitie ){
            return res.status(400).json({
                msg: 'Ups! Please Check the fields'
            })
        }
        return res.status(201).json({
            msg: 'Activity created successfully',
            activitie
        })
    }catch( error ){
        return res.status(500).json({
            msg: 'Please contact to support'
        })
    }
};

const updateActivityById = async (req, res, next) => {
    const { id } = req.params;
    const { name, content, image } = req.body;

    try {
      const activity = await Activities.findByPk(id);
      
      if (activity) {
        const updatedActivity = await activity.update({
          name,
          content,
          image,
        });

        return res.status(200).json(updatedActivity);
      } 
      
      return res.status(404).json({ msg: "Activity not found!" });
      
    } catch (error) {
      next(error);
    }
};

module.exports = {
    addActivity,
    updateActivityById,
}