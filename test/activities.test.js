const supertest = require('supertest')
const app = require('../app')
const generateToken = require('../helpers/jwt-generation')

const admin = generateToken({
    "email":"jose@test.com",
    "roleId": '1',
})

const standard = generateToken({
    "email":"max@test.com",
    "roleId": '2',
})

describe('POST JWT invalid', () =>{
    test('There is no token', async() => {
        const api = await supertest(app)
        .post("/activities")
        .expect(403)
    })
})

describe('POST Unauthorized', () =>{
    test('User is not authorize', async() => {
        const api = await supertest(app)
        .post("/activities")
        .set('Authorization', `Bearer ${standard}`)
        .expect(401)
    })
})