const app = require('../app');
const request = require('supertest')(app);
const { sequelize, News } = require('../models');
const { describe, test } = require('@jest/globals');
const generateToken = require('../helpers/jwt-generation');

// Admin role user
const adminUser = {
    email: 'martin@got.com',
    password: 'powerpower',
    roleId: process.env.ADMIN_ROLE
}

//Standard role user
const standardUser = {
    email: 'jon@got.com',
    password: 'powerpower',
    roleId: process.env.STANDARD_ROLE
}

//Sending a random new
const randomNew = {
    name: 'Testing news',
    content: 'Testing content',
    image: 'newsTesting.jpg'
}

const noNameNew = {
    content: 'Testing content',
    image: 'newsTesting.jpg'
}

const noContentNew = {
    name: 'Testing news',
    image: 'newsTesting.jpg'
}

const noImageNew = {
    name: 'Testing news',
    content: 'Testing content',
}

const token = generateToken(adminUser);
const standardToken = generateToken(standardUser);

describe('POST /news', () => {
    test('Should create a new', async () => {
        const response = await request.post('/news')
            .set('Authorization', `Bearer ${token}`)
            .send(randomNew)
        expect(response.status).toBe(201);
    });

    test('Should return an error if no token was sent', async () => {
        request.post('/news')
            .send(randomNew)
            .then(response => expect(response.status).toBe(403))
    });

    test('Should respond with a 403 error - user is not admin', async () => {
        const response = await request.post('/news')
            .set('Authorization', `Bearer ${standardToken}`)
        expect(response.status).toBe(401);
    })

    test('Should return an error if no fields were sent', async () => {
        const response = await request.post('/news')
            .set('Authorization', `Bearer ${token}`)
            .send({})
        expect(response.status).toBe(400)
    })

    test('Should return an 400 error - no name was sent', async () => {
        const response = await request.post('/news')
            .set('Authorization', `Bearer ${token}`)
            .send(noNameNew)
            expect(response.status).toBe(400)
    });

    test('Should return an 400 error - no content was sent', async () => {
        const response = await request.post('/news')
            .set('Authorization', `Bearer ${token}`)
            .send(noContentNew)
            expect(response.status).toBe(400)
    });

    test('Should return an 400 error - no image was sent', async () => {
        const response = await request.post('/news')
            .set('Authorization', `Bearer ${token}`)
            .send(noImageNew)
            expect(response.status).toBe(400)
    });
});

afterAll(() => {
    sequelize.close();
});





