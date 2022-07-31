const s3 = require("../config/aws")
const {Slides} = require("../models")
require('dotenv').config()

const postSlides = async (req,res) => {
    try {
        const fileContent = Buffer.from(req.files.image.data, 'base64')
        const params = {
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            key: req.files.image.name,
            Body: fileContent,
        }
        const uploadedImage = await s3.upload(params).promise()
        const newSlide = await Slides.create({
            text: uploadedImage.Key,
            imageUrl: uploadedImage.Location,
            order: new Date(),
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