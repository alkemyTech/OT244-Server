const {Slides} = require("../models");
const { getId } = require("../services/slides");

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

const getSlidesId = async (req,res,next) => {
    const { id } = req.params
    try {
        const data = await getId(id)
        if(!data) return res.status(404).json('Slide not found')
        return res.status(200).json(data)
    } catch (error) {
        return next(error)
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
    getSlidesId,
    deleteSlides,
}