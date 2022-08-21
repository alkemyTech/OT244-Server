const app = require("../app")
const request = require('supertest')(app)
const generateToken = require("../helpers/jwt-generation")
const { User, Role } = require("../models")

const roles = [
    {
        name: 'Admin',
        description: 'Usuario administrador',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Standard',
        description: 'Usuario regular',
        createdAt: new Date,
        updatedAt: new Date
      }
]

const seederUser = [
    {
        firstName: 'Juan',
        lastName: 'Dev',
        email: 'prueba@test.com',
        password: 'Pass1234',
        roleId: process.env.STANDARD_ROLE,
        photo: "localhost:4001/profile.png"
    },
    {
        firstName: 'Max',
        lastName: 'Dev',
        email: 'max@test.com',
        password: 'Pass1234',
        roleId: process.env.STANDARD_ROLE,
        photo: "localhost:4001/profile.png"
    }
]

const user = generateToken({
    email: 'juan@test.com',
    roleId: process.env.STANDARD_ROLE
})

const admin = generateToken({
    email: 'juan@test.com',
    roleId: process.env.ADMIN_ROLE_ID
})

const updatedUser = {
    firstName: "Juan",
    lastName: "Triviani",
    photo: "localhost:4001/profile2.png"
}

const emptyFirstName = {
    firstName: "",
    lastName: "Triviani",
    photo: "localhost:4001/profile2.png"
}

const emptyLastName = {
    firstName: "Juan",
    lastName: "",
    photo: "localhost:4001/profile2.png"
}

const emptyPhoto = {
    firstName: "Juan",
    lastName: "Triviani",
    photo: ""
}

const firstName = {
    firstName: "Sebas"
}

const lastName = {
    lastName: "Amaya"
}

const invalidFirstName = {
    firstName: ""
}

const invalidLastName = {
    lastName: ""
}

const invalidPhoto = {
    photo: "invalid"
}

const emptyToken = null
const invalidId = 12345
const emptyId = null
const id = 1
const myEmpty = ''

describe('UPDATE user by id /users/:id', () => {
    beforeAll(async() => {
        await Role.bulkCreate(roles)
        await User.bulkCreate(seederUser)
    })
    test("User updated", async() => {
        const response = await request
            .put(`/users/${id}`)
            .send(updatedUser)
        expect(response.status).toBe(200)
    })

    test("Id empty", async() => {
        const response = await request
            .put(`/users/`)
            .send(updatedUser)
        expect(response.status).toEqual(404)
    })

    test("Id invalid or no exist", async() => {
        const response = await request
            .put(`/users/${invalidId}`)
            .send(updatedUser)
        expect(response.status).toBe(404)
    })

    test("Name empty", async() => {
        const response = await request
            .put(`/users/${id}`)
            .send(emptyFirstName)
        expect(response.status).toBe(400)
    })

    test("Lastname empty", async() => {
        const response = await request
            .put(`/users/${id}`)
            .send(emptyLastName)
        expect(response.status).toBe(400)
    })

    test("Photo empty", async() => {
        const response = await request
            .put(`/users/${id}`)
            .send(emptyPhoto)
        expect(response.status).toBe(400)
    })

    test("Update only firstName", async() => {
        const response = await request
            .put(`/users/${id}`)
            .send(firstName)
        expect(response.status).toBe(200)
        const user = await User.findByPk(id)
        expect(user.firstName).toBe(firstName.firstName)
    })

    test("Update only lastName", async() => {
        const response = await request
            .put(`/users/${id}`)
            .send(lastName)
        expect(response.status).toBe(200)
        const user = await User.findByPk(id)
        expect(user.lastName).toBe(lastName.lastName)
    })    

    test("Update only firstName with invalid fields", async() => {
        const response = await request
            .put(`/users/${id}`)
            .send(invalidFirstName)
        expect(response.status).toBe(400)
    })

    test("Update only lastName with invalid fields", async() => {
        const response = await request
            .put(`/users/${id}`)
            .send(invalidLastName)
        expect(response.status).toBe(400)
    })

    test("Update only photo with invalid fields", async() => {
        const response = await request
            .put(`/users/${id}`)
            .send(invalidPhoto)
        expect(response.status).toBe(400)
    })
})

describe('DELETE user by id /users/:id', () => {
    
    test("User deleted", async() => {
        const response = await request            
            .delete(`/users/${id}`)
            .set('Authorization', myEmpty)           
        expect(response.status).toBe(200)
    })

    test("Id missing", async() => {
        const response = await request
            .delete(`/users/${ emptyId }`)
            .set('Authorization', user)
        expect(response.status).toBe(403)
    })

    test("token missing", async() => {
        const response = await request
            .delete(`/users/${ id }`)
            .set('Authorization', emptyToken)
        expect(response.status).toBe(403)
    })

    test("invalid ID", async() => {
        const response = await request
            .delete(`/users/${ invalidId }`)
            .set('Authorization', user)
        expect(response.status).toBe(403)
    })

    afterAll(async() => {
        await Role.destroy({
            where: {},
            force: true
        });
        await User.destroy({
            where: {},
            force: true
        });
    })
})