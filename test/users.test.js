const app = require("../app")
const request = require('supertest')(app)
const generateToken = require("../helpers/jwt-generation")
const { User } = require("../models")


const user = {
    email: 'juan@test.com',
    password: 'Juan92',
    roleId: process.env.STANDARD_ROLE
}

const updatedUser = {
    firstName: "Juan",
    lastName: "Triviani",
    photo: "https://cdn.superaficionados.com/imagenes/1-mugen-ressha-hen-personajes-akaza-cke.jpg"
}

const emptyFirstName = {
    firstName: "",
    lastName: "Triviani",
    photo: "https://www.egames.news/__export/1643571844615/sites/debate/img/2022/01/30/cuxl_es_el_verdadero_poder_de_zenitsu_agatsuma_en_demon_slayer.jpg_554688468.jpg"
}

const emptyLastName = {
    firstName: "Juan",
    lastName: "",
    photo: "https://www.egames.news/__export/1643571844615/sites/debate/img/2022/01/30/cuxl_es_el_verdadero_poder_de_zenitsu_agatsuma_en_demon_slayer.jpg_554688468.jpg"
}

const emptyPhoto = {
    firstName: "Juan",
    lastName: "Triviani",
    photo: "https://www.egames.news/__export/1643571844615/sites/debate/img/2022/01/30/cuxl_es_el_verdadero_poder_de_zenitsu_agatsuma_en_demon_slayer.jpg_554688468.jpg"
}

const firstName = {
    firstName: "new name"
}

const lastName = {
    lastName: "new lastname"
}

const photo = {
    photo: "https://www.egames.news/__export/1643571844615/sites/debate/img/2022/01/30/cuxl_es_el_verdadero_poder_de_zenitsu_agatsuma_en_demon_slayer.jpg_554688468.jpg"
}

const invalidFirstName = {
    firstName: "new name"
}

const invalidLastName = {
    lastName: "new lastname"
}

const invalidPhoto = {
    photo: "invalid"
}

const token = generateToken(user)
const emptyToken = ''

const invalidId = 12345
const emptyId = null
const id = 1


describe('UPDATE user by id /users/:id', () => {
    test("User updated", async() => {
        const response = await request
            .put(`users/${id}`)
            .send(updatedUser)
        expect(response.status).toBe(200)
        const user = await User.findByPk(id)
        expect(user.firstName).toBe(updatedUser.firstName)
        expect(user.lastName).toBe(updatedUser.lastName)
        expect(user.photo).toBe(updatedUser.photo)
    })

    test("Id empty", async() => {
        const response = await request
            .put(`/users/${emptyId}`)
            .send(updatedUser)
        expect(response.status).toBe(404)
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
        expect(user.firstName).toBe(lastName.lastName)
    })

    test("Update only photo", async() => {
        const response = await request
            .put(`/users/${id}`)
            .send(photo)
        expect(response.status).toBe(200)
        const user = await User.findByPk(id)
        expect(user.firstName).toBe(photo.photo)
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

describe('DELETE user by id /news/:id', () => {
    test("User deleted", async() => {
        const response = await request
            .delete(`/users/${ id }`)
            .set('Authorization', `Token ${ token }`)
        expect(response.status).toBe(200)
    })

    test("Id missing", async() => {
        const response = await request
            .delete(`/users/${ emptyId }`)
            .set('Authorization', `Token ${ token }`)
        expect(response.status).toBe(403)
    })

    test("token missing", async() => {
        const response = await request
            .delete(`/users/${ id }`)
            .set('Authorization', `Token ${ emptyToken }`)
        expect(response.status).toBe(403)
    })

    test("invalid ID", async() => {
        const response = await request
            .delete(`/users/${ invalidId }`)
            .set('Authorization', `Token ${ token }`)
        expect(response.status).toBe(403)
    })
})