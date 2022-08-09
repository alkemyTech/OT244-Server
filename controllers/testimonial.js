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
  const { page, size } = request.query
  const limit = size ? +size : 10
  const offset = page ? page * limit : 0
  try {
    const data = await testimonialsServiceGet(limit,offset,page)
    if(!data) return response.status(404).json('Testimonials not found')
    return response.status(200).json(data)
  } catch (error) {
    return next(error)
  }
}

async function getByIdTestimonial(request, response) { }

async function deleteByIdTestimonial(request, response,next) {
    const { id } = req.params;
    try{
        await Testimonial.destroy({ where: { id } });
        res.sendStatus(200);
      }
     catch (error) {
      next(error);
    }
  }
async function putByIdTestimonial(request, response) { }

module.exports = {
  createTestimonial,
  getAllTestimonials,
  getByIdTestimonial,
  deleteByIdTestimonial,
  putByIdTestimonial,
};
