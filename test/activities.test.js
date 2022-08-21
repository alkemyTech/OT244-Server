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

describe('POST:/activities', () =>{

    test('There is no token', async() => {
        const api = await supertest(app)
        .post("/activities")
        expect(api.statusCode).toBe(403)
    })

    test('User is not authorize', async() => {
        const api = await supertest(app)
        .post("/activities")
        .set('Authorization', `Bearer ${standard}`)
        expect(api.statusCode).toBe(401)
    })

    test('There is no name', async() => {
        const api = await supertest(app)
        .post("/activities")
        .send({content:"content", image:"image.example"})
        .set('Authorization', `Bearer ${admin}`)
        expect(api.statusCode).toBe(400)
    })

    test('There is no content', async() => {
        const api = await supertest(app)
        .post("/activities")
        .send({name:"name", image:"image.example"})
        .set('Authorization', `Bearer ${admin}`)
        expect(400)
    })

    test('There is no image', async() => {
        const api = await supertest(app)
        .post("/activities")
        .send({content:"content", name:"name"})
        .set('Authorization', `Bearer ${admin}`)
        expect(api.statusCode).toBe(400)
    })
    
    test('There is no Body', async() => {
        const api = await supertest(app)
        .post("/activities")
        .send({})
        .set('Authorization', `Bearer ${admin}`)
        expect(api.statusCode).toBe(400)
    })

    test('If there is data', async() => {
        const api = await supertest(app)
        .post("/activities")
        .send({content:"content", name:"name", image:"image.example"})
        .set('Authorization', `Bearer ${admin}`)
        expect(api.statusCode).toBe(201)
    })
})

describe('PUT:/activities/id', () =>{
    test('There is no token', async() => {
        const api = await supertest(app)
        .put("/activities/1")
        expect(api.statusCode).toBe(403)
    })

    test('User is not authorize', async() => {
        const api = await supertest(app)
        .put("/activities/1")
        .set('Authorization', `Bearer ${standard}`)
        expect(api.statusCode).toBe(401)
    })

    test('There is no name', async() => {
        const api = await supertest(app)
        .put("/activities/1")
        .send({content:"content", image:"image.example"})
        .set('Authorization', `Bearer ${admin}`)
        expect(api.statusCode).toBe(400)
    })

    test('There is no content', async() => {
        const api = await supertest(app)
        .put("/activities/1")
        .send({name:"name", image:"image.example", content:""})
        .set('Authorization', `Bearer ${admin}`)
        expect(api.statusCode).toBe(400)
    })
    
    test('There is no image', async() => {
        const api = await supertest(app)
        .put("/activities/1")
        .send({content:"content", name:"name"})
        .set('Authorization', `Bearer ${admin}`)
        expect(api.statusCode).toBe(400)
    })

    test('There is no Body', async() => {
        const api = await supertest(app)
        .put("/activities/1")
        .send({name:"", content:"", image:""})
        .set('Authorization', `Bearer ${admin}`)
        expect(api.statusCode).toBe(400)
    })

    test('If there is data', async() => {
        const api = await supertest(app)
        .put("/activities/1")
        .send({content:"content-example", name:"name", image:"image.example"})
        .set('Authorization', `Bearer ${admin}`)
        expect(api.statusCode).toBe(200)
    })

    test('ID not found', async() => {
        const api = await supertest(app)
        .put("/activities")
        .set('Authorization', `Bearer ${admin}`)
        expect(api.statusCode).toBe(404)
    })
})