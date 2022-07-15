'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Jose',
      lastName: 'Alvarez',
      email: 'jfilippo04@test.com',
      password: '1234',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Alberto',
      lastName: 'Rodriguez',
      email: 'alberto89@test.com',
      password: '7856',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Katherine',
      lastName: 'Rodrigo',
      email: 'katherine58@test.com',
      password: '6492',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Cesar',
      lastName: 'Castillo',
      email: 'cesar06@test.com',
      password: '1534',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Israel',
      lastName: 'Salazar',
      email: 'Israel88@test.com',
      password: '1890',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Gorge',
      lastName: 'Silva',
      email: 'silva@test.com',
      password: '0672',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Juan',
      lastName: 'Del mar',
      email: 'juan@test.com',
      password: '1234',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Jessica',
      lastName: 'Martinez',
      email: 'jessica@test.com',
      password: '9987',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Angelica',
      lastName: 'Picasso',
      email: 'picasso@test.com',
      password: '1234',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Albert',
      lastName: 'Del mar',
      email: 'albert@test.com',
      password: '8971',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Max',
      lastName: 'Gutierrez',
      email: 'max@test.com',
      password: '5471',
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Add commands to revert seed here.
     
    // Example:
    await queryInterface.bulkDelete('user', null, {});
  }
};
