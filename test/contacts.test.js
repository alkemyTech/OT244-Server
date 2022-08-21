const app = require("./../app")
const request = require("supertest")(app);
const generateToken = require("./../helpers/jwt-generation");
const{ contacts } = require("./../models")

const newContact = {
    name: 'Luis',
    phone: 3227191368,
    email: 'lucho1@email.com',
    message: 'My friend'    
}

const contactEmptyMessage = {
    name: 'Luis',
    phone: 3227191368,
    email: 'lucho2@email.com',
    message: ''
}

const contactEmptyName = {
    name: '',
    phone: 3227191368,
    email: 'lucho1@email.com',
    message: 'My message'
}

const contactEmptyPhone = {
    name: 'Luis',
    phone: null,
    email: 'lucho1@email.com',
    message: 'My message'
}

const contactEmptyEmail = {
    name: 'Luis',
    phone: 3227191368,
    email: '',
    message: 'My message'
}

const userAdmin = {
    email: 'admin@test.com',
    password: 'Pass1234',
    roleId: process.env.ADMIN_ROLE
}

const standarUser = {
    email: 'stand@test.com',
    password: 'Pass4321',
    roleId: process.env.STANDARD_ROLE
}

const token = generateToken(standarUser)
const tokenAdmin = generateToken(userAdmin)
const tokenInvalid = 'jcbdfjuskjskcjdnbckkncd.jcbdjbvjsncbjdkjsjnxx.abcjubdjcbdjbdjchzus'


describe('POST /contacts', () => {
    test('Add contact', async() => {
        const response = await request
            .post('/contacts')
            .send(newContact)
        expect(response.status).toBe(200)
    })

    test('Add contact with empty message', async() => {
        const response = await request
            .post('/contacts')
            .send(contactEmptyMessage)
        expect(response.status).toBe(200)
    })

    test('Error, empty name', async() => {
        const response = await request
            .post('/contacts')
            .send(contactEmptyName)
        expect(response.status).toBe(400)
    })

    test('Error, empty phone', async() => {
        const response = await request
            .post('/contacts')
            .send(contactEmptyPhone)
        expect(response.status).toBe(400)
    })

    test('Error, empty email', async() => {
        const response = await request
            .post('/contacts')
            .send(contactEmptyEmail)
        expect(response.status).toBe(400)
    })

    test('Error, email is already exist', async() => {
        const response = await request
            .post('/contacts')
            .send(newContact)
        expect(response.status).toBe(400)
    })
})

describe('GET /contacts', () => {
    test('Get contacts token admin', async() => {
        const response = await request
            .get('/contacts')
            .set('Authorization', `Bearer ${tokenAdmin}`)
        expect(response.status).toBe(200)
    })

    test('Get contacts token user standar, user is not authorized', async() => {
        const response = await request
            .get('/contacts')
            .set('Authorization', `Bearer ${token}`)
        expect(response.status).toBe(401)
    })

    test('Get contacts invalid token', async() => {
        const response = await request
            .get('/contacts')
            .set('Authorization', `Bearer ${tokenInvalid}`)
        expect(response.status).toBe(403)
    })

    test('Get contacts without token', async() => {
        const response = await request
            .get('/contacts')
        expect(response.status).toBe(403)
    })

    afterAll(async() => {
        await contacts.destroy({
            where: {},
            force: true
        });
    })
})