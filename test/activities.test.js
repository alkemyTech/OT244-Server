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

describe('POST verified body', () =>{
    test('There is no name', async() => {
        const api = await supertest(app)
        .post("/activities")
        .send({content:"content", image:"image.example"})
        .set('Authorization', `Bearer ${admin}`)
        .expect(400)
    })
})

describe('POST verified body', () =>{
    test('There is no content', async() => {
        const api = await supertest(app)
        .post("/activities")
        .send({name:"name", image:"image.example"})
        .set('Authorization', `Bearer ${admin}`)
        .expect(400)
    })
})

describe('POST verified body', () =>{
    test('There is no image', async() => {
        const api = await supertest(app)
        .post("/activities")
        .send({content:"content", name:"name"})
        .set('Authorization', `Bearer ${admin}`)
        .expect(400)
    })
})

describe('POST verified body', () =>{
    test('There is no Body', async() => {
        const api = await supertest(app)
        .post("/activities")
        .send({})
        .set('Authorization', `Bearer ${admin}`)
        .expect(400)
    })
})

describe('POST verified body', () =>{
    test('If there is data', async() => {
        const api = await supertest(app)
        .post("/activities")
        .send({content:"content", name:"name", image:"image.example"})
        .set('Authorization', `Bearer ${admin}`)
        .expect(201)
        .expect('Content-Type', /application\/json/)
    })
})

describe('PUT JWT invalid', () =>{
    test('There is no token', async() => {
        const api = await supertest(app)
        .put("/activities/1")
        .expect(403)
    })
})

describe('PUT Unauthorized', () =>{
    test('User is not authorize', async() => {
        const api = await supertest(app)
        .put("/activities/1")
        .set('Authorization', `Bearer ${standard}`)
        .expect(401)
    })
})

describe('PUT verified body', () =>{
    test('There is no name', async() => {
        const api = await supertest(app)
        .put("/activities/1")
        .send({content:"content", image:"image.example"})
        .set('Authorization', `Bearer ${admin}`)
        .expect(400)
    })
})

describe('PUT verified body', () =>{
    test('There is no content', async() => {
        const api = await supertest(app)
        .put("/activities/1")
        .send({name:"name", image:"image.example", content:""})
        .set('Authorization', `Bearer ${admin}`)
        .expect(400)
    })
})

describe('PUT verified body', () =>{
    test('There is no image', async() => {
        const api = await supertest(app)
        .put("/activities/1")
        .send({content:"content", name:"name"})
        .set('Authorization', `Bearer ${admin}`)
        .expect(400)
    })
})

describe('PUT verified body', () =>{
    test('There is no Body', async() => {
        const api = await supertest(app)
        .put("/activities/1")
        .send({name:"", content:"", image:""})
        .set('Authorization', `Bearer ${admin}`)
        .expect(400)
    })
})

describe('PUT verified body', () =>{
    test('If there is data', async() => {
        const api = await supertest(app)
        .put("/activities/1")
        .send({content:"content-example", name:"name", image:"image.example"})
        .set('Authorization', `Bearer ${admin}`)
        .expect(200)
        .expect('Content-Type', /application\/json/)
    })
})

describe('PUT verified Id', () =>{
    test('ID not found', async() => {
        const api = await supertest(app)
        .put("/activities")
        .set('Authorization', `Bearer ${admin}`)
        .expect(404)
    })
})