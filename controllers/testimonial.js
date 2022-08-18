const { Testimonial } = require('../models');
const { testimonialsServiceGet } = require('../services/testimonials');

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

async function getAllTestimonials(request, response, next) {
  try {
    const { page, size } = request.query
    const data = await testimonialsServiceGet(page,size)
    return response.status(200).json(data)
  } catch (error) {
    return next(error)
  }
}

async function getByIdTestimonial(request, response) { }

async function putByIdTestimonial(req, res,next) { 
  const { id } = req.params;
  const { name, image, content, } = req.body;

  try {

    const testimonial = await Testimonial.findByPk(id);

    if (!testimonial) {
      return res.status(404).json({
        msg: 'Testimonial not found'
      });
    }

    const newTestimonial = await testimonial.update({
      name,
      image,
      content
    });

    return res.status(200).json(newTestimonial); 

  } catch (error) {
    next(error);
  }
};


async function deleteByIdTestimonial(req, res,next) {
    const { id } = req.params;
    try{
        await Testimonial.destroy({ where: { id } });
        res.sendStatus(200);
      }
     catch (error) {
      next(error);
    }
  }

module.exports = {
  createTestimonial,
  getAllTestimonials,
  getByIdTestimonial,
  deleteByIdTestimonial,
  putByIdTestimonial,
};
