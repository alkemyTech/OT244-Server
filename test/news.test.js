const app = require('../app');
const request = require('supertest')(app);
const { sequelize, News } = require('../models');
const { describe, test } = require('@jest/globals');
const generateToken = require('../helpers/jwt-generation');

const adminUser = {
    email: 'juan@test.com',
    password: 'admin',
    roleId: process.env.ADMIN_ROLE
}

const standardUser = {
    email: 'marco@test.com',
    password: 'standard',
    roleId: process.env.STANDARD_ROLE
}

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

    test('Should return a 403 error if token is invalid', async () => {
        request.post('/news')
            .set('Authorization', `Bearer 123`)
            .send(randomNew)
            .then(response => expect(response.status).toBe(403));
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

describe('PUT /news/:id', () => {
    test('Should update a new', async () => {
        const response = await request.put('/news/3')
            .set('Authorization', `Bearer ${token}`)
            .send(randomNew)
        expect(response.status).toBe(200)
        const news = await News.findByPk(3)
        expect(news.name).toBe('Testing news')
        expect(news.content).toBe('Testing content')
        expect(news.image).toBe('newsTesting.jpg')
    })

    test('Should return an error if no token was sent', async () => {
        request.put('/news/3')
            .send(randomNew)
            .then(response => expect(response.status).toBe(403))
    });

    test('Should return a 403 error if token is invalid', async () => {
        request.put('/news/3')
            .set('Authorization', `Bearer 123`)
            .send(randomNew)
            .then(response => expect(response.status).toBe(403));
    });

    test('Should respond with a 403 error - user is not admin', async () => {
        const response = await request.put('/news/3')
            .set('Authorization', `Bearer ${standardToken}`)
            .send(randomNew);
        expect(response.status).toBe(401);
    });

    test('Should return a 400 error if no fields were sent', async () => {
        const response = await request.put('/news/3')
            .set('Authorization', `Bearer ${token}`)
            .send({})
        expect(response.status).toBe(400)
    });

    test('Should return a 400 error - no name was sent', async () => {
        const response = await request.put('/news/3')
            .set('Authorization', `Bearer ${token}`)
            .send(noNameNew)
        expect(response.status).toBe(400)
    });

    test('Should return a 400 error - no content was sent', async () => {
        const response = await request.put('/news/3')
            .set('Authorization', `Bearer ${token}`)
            .send(noContentNew)
        expect(response.status).toBe(400)
    });

    test('Should return a 400 error - no image was sent', async () => {
        const response = await request.put('/news/3')
            .set('Authorization', `Bearer ${token}`)
            .send(noImageNew)
        expect(response.status).toBe(400)
    });

    test('Should return a 404 error - id does not exist', async () => {
        const response = await request.put('/news/1234')
            .set('Authorization', `Bearer ${token}`)
            .send(randomNew)
        expect(response.status).toBe(404)
    });
});

describe('DELETE /news/:id', () => {
    test('Should delete a new', async () => {
        const response = await request.delete('/news/1')
            .set('Authorization', `Bearer ${token}`)
        expect(response.status).toBe(200)
        const news = await News.findByPk(1);
        expect(news).toBeNull();
    });

    test('Should return a 404 error - id does not exist', async () => {
        const response = await request.delete('/news/1234')
            .set('Authorization', `Bearer ${token}`)
        expect(response.status).toBe(404)
    });

    test('Should return an error if no token was sent', async () => {
        request.delete('/news/1')
            .then(response => expect(response.status).toBe(403))
    });

    test('Should return a 403 error if token is invalid', async () => {
        request.delete('/news/1')
            .set('Authorization', `Bearer 123`)
            .then(response => expect(response.status).toBe(403));
    });

    test('Should respond with a 403 error - user is not admin', async () => {
        const response = await request.delete('/news/1')
            .set('Authorization', `Bearer ${standardToken}`)
        expect(response.status).toBe(401);
    });
});

describe('GET /news/:id', () => {
    test('Should return the requested new', async () => {
        const response = await request.get('/news/5')
            .set('Authorization', `Bearer ${token}`)
        expect(response.status).toBe(200)
    });

    test('Should return a 404 error - id does not exist', async () => {
        const response = await request.get('/news/1234')
            .set('Authorization', `Bearer ${token}`)
        expect(response.status).toBe(404)
    });

    test('Should return an error if no token was sent', async () => {
        request.get('/news/5')
            .then(response => expect(response.status).toBe(403))
    });

    test('Should return a 403 error if token is invalid', async () => {
        request.get('/news/5')
            .set('Authorization', `Bearer 123`)
            .then(response => expect(response.status).toBe(403));
    });

    test('Should respond with a 403 error - user is not admin', async () => {
        const response = await request.get('/news/5')
            .set('Authorization', `Bearer ${standardToken}`)
        expect(response.status).toBe(401);
    });
});

afterAll(() => {
    sequelize.close();
});





