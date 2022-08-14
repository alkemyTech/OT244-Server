const supertest = require('supertest')
const app = require('../app')
const generateToken = require('../helpers/jwt-generation')

const token = generateToken({
    "email":"jose@test.com",
    "roleId": '1',
})

test('ok', async() => {
    const api = await supertest(app)
    .get("/categories")
    .set('Authorization', `Bearer ${token}`)
    .expect(200)
    .expect('Content-Type', /application\/json/)
})