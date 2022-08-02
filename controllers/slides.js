const {Slides} = require("../models")

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

module.exports = {
    postSlides,
}