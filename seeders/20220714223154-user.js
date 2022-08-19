'use strict';

const bcrypt = require('bcrypt')
const auth = require('../config/auth')

module.exports = {
  up: async (queryInterface, Sequelize) => {
      const salt = await bcrypt.genSalt(Number.parseInt(auth.rounds))
      const admin = await bcrypt.hash(auth.admin, salt)
      const standard = await bcrypt.hash(auth.standard, salt)
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Jose',
      lastName: 'Alvarez',
      email: 'jose@test.com',
      password: admin,
      roleId: 1,
      photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Alberto',
      lastName: 'Rodriguez',
      email: 'alberto@test.com',
      password: admin,
      roleId: 1,
      photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Katherine',
      lastName: 'Rodrigo',
      email: 'katherine@test.com',
      password: admin,
      roleId: 1,
      photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Cesar',
      lastName: 'Castillo',
      email: 'cesar@test.com',
      password: admin,
      roleId: 1,
      photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Israel',
      lastName: 'Salazar',
      email: 'Israel@test.com',
      password: admin,
      roleId: 1,
      photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Gorge',
      lastName: 'Silva',
      email: 'gorge@test.com',
      password: admin,
      roleId: 1,
      photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Juan',
      lastName: 'Del mar',
      email: 'juan@test.com',
      password: admin,
      roleId: 1,
      photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Jessica',
      lastName: 'Martinez',
      email: 'jessica@test.com',
      password: admin,
      roleId: 1,
      photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Angelica',
      lastName: 'Picasso',
      email: 'angelica@test.com',
      password: admin,
      roleId: 1,
      photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Albert',
      lastName: 'Del mar',
      email: 'albert@test.com',
      password: admin,
      roleId: 1,
      photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Max',
      lastName: 'Gutierrez',
      email: 'max@test.com',
      password: standard,
      roleId: 2,
      photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Francisco',
      lastName: 'Alvarado',
      email: 'francisco@test.com',
      password: standard,
      roleId: 2,
      photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Pedro',
      lastName: 'Salazar',
      email: 'pedro@test.com',
      password: standard,
      roleId: 2,
      photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Marco',
      lastName: 'Vasquez',
      email: 'marco@test.com',
      password: standard,
      roleId: 2,
      photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Mar',
      lastName: 'kennedy',
      email: 'mar@test.com',
      password: standard,
      roleId: 2,
      photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Osvaldo',
      lastName: 'Perez',
      email: 'osvaldo@test.com',
      password: standard,
      roleId: 2,
      photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Lion',
      lastName: 'Magallanes',
      email: 'lion@test.com',
      password: standard,
      roleId: 2,
      photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Francesca',
      lastName: 'Salas',
      email: 'francesca@test.com',
      password: standard,
      roleId: 2,
      photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Luz',
      lastName: 'Turin',
      email: 'luz@test.com',
      password: standard,
      roleId: 2,
      photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Maximilian',
      lastName: 'Perez',
      email: 'maximilian@test.com',
      password: standard,
      roleId: 2,
      photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Add commands to revert seed here.
     
    // Example:
    await queryInterface.bulkDelete('user', null, {});
  }
};