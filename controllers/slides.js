const {Slides} = require("../models")

const getSlides = async (req,res) => {
    try {
        const getData = await Slides.findAll({attributes: ['text','imageUrl','order']})
        res.status(200).json(getData)
      } catch (error) {
        return res.status(500).json({ msg: "An unexpected error occurred" });
      }
}

const postSlides = async (req,res) => {
    try {
        const newSlide = await Slides.create({
            text: 'image-example',
            imageUrl: 'https://image-example.com',
            order: 'image-example-2022',
        })
        const data = { msg: "Slide created successfully", newSlide }
        return res.status(201).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteSlides = async (req,res) => {
    const { id } = req.params;
    try{
      const deleted = await Slides.destroy({ where: { id } });
        if(deleted) {
          res.sendStatus(200);
      }else{
          throw new Error('Slides not found');
      }
      }
     catch (error) {
      next(error);
    }
  }


module.exports = {
    getSlides,
    postSlides,
    deleteSlides,
}