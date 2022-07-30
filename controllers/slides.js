const { Slides } = require("../models");

const getSlides = async (req,res) => {
    try {
        const getData = await Slides.findAll({attributes: ['text','imageUrl','order']})
        res.status(200).json(getData)
      } catch (error) {
        return res.status(500).json({ msg: "An unexpected error occurred" });
      }
}

module.exports = {
    getSlides,
}