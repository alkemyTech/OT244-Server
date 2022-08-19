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

describe('POST:/organization/public/id', () =>{
    test('There is no token', async() => {
        const api = await supertest(app)
        .post("/organization/public/1")
        .expect(403)
    })

    test('User is not authorize', async() => {
        const api = await supertest(app)
        .post("/organization/public/1")
        .set('Authorization', `Bearer ${standard}`)
        .expect(401)
    })

    test('There is no name', async() => {
        const api = await supertest(app)
        .post("/organization/public/1")
        .send({
            image: "image-example", 
            address: "address-example", 
            phone: "phone-example", 
            email: "email-example", 
            welcomeText: "welcomeText-example", 
            aboutUsText: "aboutUsText-example"
        })
        .set('Authorization', `Bearer ${admin}`)
        .expect(400)
    })
    
    test('There is no image', async() => {
        const api = await supertest(app)
        .post("/organization/public/1")
        .send({
            name: "name-example", 
            address: "address-example", 
            phone: "phone-example", 
            email: "email-example", 
            welcomeText: "welcomeText-example", 
            aboutUsText: "aboutUsText-example"
        })
        .set('Authorization', `Bearer ${admin}`)
        .expect(400)
    })

    test('There is no address', async() => {
        const api = await supertest(app)
        .post("/organization/public/1")
        .send({
            name: "name-example", 
            image: "image-example", 
            phone: "phone-example", 
            email: "email-example", 
            welcomeText: "welcomeText-example", 
            aboutUsText: "aboutUsText-example"
        })
        .set('Authorization', `Bearer ${admin}`)
        .expect(400)
    })

    test('There is no phone', async() => {
        const api = await supertest(app)
        .post("/organization/public/1")
        .send({
            name: "name-example", 
            image: "image-example", 
            address: "address-example",
            phone: "", 
            email: "email-example", 
            welcomeText: "welcomeText-example", 
            aboutUsText: "aboutUsText-example"
        })
        .set('Authorization', `Bearer ${admin}`)
        .expect(400)
    })
    
    test('There is no email', async() => {
        const api = await supertest(app)
        .post("/organization/public/1")
        .send({
            name: "name-example", 
            image: "image-example", 
            address: "address-example", 
            phone: "phone-example", 
            welcomeText: "welcomeText-example", 
            aboutUsText: "aboutUsText-example"
        })
        .set('Authorization', `Bearer ${admin}`)
        .expect(400)
    })

    test('There is no welcomeText', async() => {
        const api = await supertest(app)
        .post("/organization/public/1")
        .send({
            name: "name-example", 
            image: "image-example", 
            address: "address-example", 
            phone: "phone-example", 
            email: "email-example", 
            aboutUsText: "aboutUsText-example"
        })
        .set('Authorization', `Bearer ${admin}`)
        .expect(400)
    })

    test('There is no aboutUsText', async() => {
        const api = await supertest(app)
        .post("/organization/public/1")
        .send({
            name: "name-example", 
            image: "image-example", 
            address: "address-example", 
            phone: "phone-example", 
            email: "email-example", 
            welcomeText: "welcomeText-example"
        })
        .set('Authorization', `Bearer ${admin}`)
        .expect(400)
    })

    test('There is no Data', async() => {
        const api = await supertest(app)
        .post("/organization/public/1")
        .send({
            name: "", 
            image: "", 
            address: "", 
            phone: "", 
            email: "", 
            welcomeText: "",
            aboutUsText: ""
        })
        .set('Authorization', `Bearer ${admin}`)
        .expect(400)
    })
    test('Data already ready', async() => {
        const api = await supertest(app)
        .post("/organization/public/1")
        .send({
            name: "name-example", 
            image: "https://www.thunderclient.com/welcome", 
            address: "address-example", 
            phone: "+583015399890", 
            email: "testjose@tes.com", 
            welcomeText: "welcomeText-example",
            aboutUsText: "aboutUsText-example"
        })
        .set('Authorization', `Bearer ${admin}`)
        .expect(404)
        .expect('Content-Type', /application\/json/)
    })

    test('ID not found', async() => {
        const api = await supertest(app)
        .put("/organization/public")
        .set('Authorization', `Bearer ${admin}`)
        .expect(404)
    })
    
})