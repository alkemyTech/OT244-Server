const { Testimonial } = require('../models');

const createTestimonial = async (req, res) => {

  const { name, content, image } = req.body;

  try {
    await Testimonial.create({
      name,
      content,
      image
    });

    res.status(201).json({
      msg: 'Testimonial created successfully'
    });

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
