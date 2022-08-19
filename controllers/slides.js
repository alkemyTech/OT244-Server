const {Slide} = require( "../models")
const { getId, associate} = require("../services/slides");

const getSlides = async (req,res,next) => {
    try {
        const getData = await Slides.findAll({attributes: ['text','imageUrl','order']})
        res.status(200).json(getData)
      } catch (error) {
        return next(error)
      }
}

const postSlides = async (req,res,next) => {
    try {
        const { text, imageUrl, order } = req.body
        const newSlide = await Slide.create({
            text,
            imageUrl,
            order,
        })
        const data = { msg: "Slide created successfully", newSlide }
        return res.status(201).json(data)
    } catch (error) {
        return next(error)
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

const deleteSlides = async (req,res,next) => {
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

const associeteOrganization= async (req, res, next) => {
    try {
        const { idslider ,idorganization } = req.params;

        const asociateOrnandSli = await associate(idslider,idorganization);

        res.sendStatus(200).json(asociateOrnandSli);
    } catch (err) {
        next(err);
    }
};

const getSlidesAssoOrg= async (req, res, next) => {
    try {
        const {  idorganization } = req.params;

        const getSliderwithOrg = await Slides.findAll(idorganization);

        res.sendStatus(200).json(getSliderwithOrg);
    } catch (err) {
        next(err);
    }
};


module.exports = {
    getSlides,
    postSlides,
    getSlidesId,
    deleteSlides,
    associeteOrganization,
    getSlidesAssoOrg,
}