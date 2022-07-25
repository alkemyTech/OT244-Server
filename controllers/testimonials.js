const { Testimonial } = require('../models/testimonial');

const createTestimonial = async (req, res) => {

  const { name, image, content } = req.body;

  try {
    await Testimonial.create({
      name,
      image,
      content
    });

    res.status(201).json({
      msg: 'Testimonial created successfully'
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Error creating testimonial'
    });
  }
};


async function getAllTestimonials(request, response) { }

async function getByIdTestimonial(request, response) { }

async function deleteByIdTestimonial(request, response) { }

async function putByIdTestimonial(request, response) { }

module.exports = {
  createTestimonial,
  getAllTestimonials,
  getByIdTestimonial,
  deleteByIdTestimonial,
  putByIdTestimonial,
};
