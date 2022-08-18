const app = require('../app');
const request = require('supertest')
const generateToken = require('../helpers/jwt-generation')

const userAdmin = {
    email: 'admin@admin.com',
    password: '123456',
    roleId: process.env.ADMIN_ROLE
}

const standarUser = {
    email: 'user@user.com',
    password: '123456',
    roleId: process.env.STANDARD_ROLE
}

const tokenuser = generateToken(standarUser)
const tokenAdmin = generateToken(userAdmin)

const testimonailOk = {
    name: "Marcelo",
    content: "Contenido",
    image: "image",

};
const testimonailNullName = {
    content: "Contenido",
    image: "image",

};
const testimonailNullContent = {
    name: "Marcelo",
    image: "image",

};
const testimonailUp = {
    name: "Martin",
    content: "Content",
    image: "imagen",

};

describe("Create a new testimonials with token admin", () => {
    test("should return a 404 error since there is no content", async () => {
        const res = await request(app)
            .post("/testimonials")
            .set('Authorization', `Bearer ${tokenAdmin}`)
            .send(testimonailNullName);
        expect(res.statusCode).toBe(400)
    });
});

describe("Create a new testimonials with token admin", () => {
    test("should return a 404 error since there is no name ", async () => {
        const res = await request(app)
            .post("/testimonials")
            .set('Authorization', `Bearer ${tokenAdmin}`)
            .send(testimonailNullContent);
        expect(res.statusCode).toBe(400)
    });
});
describe("Create a new testimonials with token admin", () => {
    test("should create a new testimonials", async () => {
        const res = await request(app)
            .post("/testimonials")
            .set('Authorization', `Bearer ${tokenAdmin}`)
            .send(testimonailOk);
        expect(res.statusCode).toBe(201)
    });
});


describe("Create a new testimonials with token user", () => {
    test("should return an error since only the admin creates testimonials", async () => {
        const res = await request(app)
            .post("/testimonials")
            .set('Authorization', `Bearer ${tokenuser}`)
            .send({
                name: "Ezequiel",
                content: "Contenido",
                image: "image2",
            });
        expect(res.statusCode).toBe(401)
    });
});

describe("Upgrade a testimonials with token admin", () => {
    test("should Upgrade a testimonials with token admin", async () => {
        const res = await request(app)
        .put("/testimonials/35")
        .set('Authorization', `Bearer ${tokenAdmin}`)
        .send(testimonailUp);
    expect(res.statusCode).toBe(200)
    });
});

describe("Delete a testimonials with token admin", () => {
    test("should Delete a testimonials with token admin", async () => {
        const res = await request(app)
        .del("/testimonials/30")
        .set('Authorization', `Bearer ${tokenAdmin}`)
    expect(res.statusCode).toBe(200)
    });
});


