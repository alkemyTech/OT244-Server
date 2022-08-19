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

describe('POST /testimonials', () => {
    test("should not create a new testimonials with token user", async () => {
        const res = await request(app)
            .post("/testimonials")
            .set('Authorization', `Bearer ${tokenuser}`)
            .send({testimonailOk});
        expect(res.statusCode).toBe(401)
    });
    test("should not create a new testimonials with token invalid", async () => {
        const res = await request(app)
            .post("/testimonials")
            .set('Authorization', `Bearer 123456`)
            .send({testimonailOk});
        expect(res.statusCode).toBe(403)
    });
    test("should create a new testimonials with token admin", async () => {
        const res = await request(app)
            .post("/testimonials")
            .set('Authorization', `Bearer ${tokenAdmin}`)
            .send(testimonailOk);
        expect(res.statusCode).toBe(201)
    });
    test("should return a 400 error since there is no name ", async () => {
        const res = await request(app)
            .post("/testimonials")
            .set('Authorization', `Bearer ${tokenAdmin}`)
            .send(testimonailNullContent);
        expect(res.statusCode).toBe(400)
    });
    test("should return a 400 error since there is no content", async () => {
        const res = await request(app)
            .post("/testimonials")
            .set('Authorization', `Bearer ${tokenAdmin}`)
            .send(testimonailNullName);
        expect(res.statusCode).toBe(400)
    });
});
describe('PUT /testimonials/:id', () => {
    test("should Upgrade a testimonials with token admin", async () => {
        const res = await request(app)
        .put("/testimonials/1")
        .set('Authorization', `Bearer ${tokenAdmin}`)
        .send(testimonailUp);
    expect(res.statusCode).toBe(200)
    });
    test("should Upgrade a testimonials with token user", async () => {
        const res = await request(app)
        .put("/testimonials/1")
        .set('Authorization', `Bearer ${tokenuser}`)
        .send(testimonailUp);
    expect(res.statusCode).toBe(401)
    });
});
describe('DELETE /testimonials/:id', () => {
    test("should Delete a testimonials with token admin", async () => {
        const res = await request(app)
        .del("/testimonials/1")
        .set('Authorization', `Bearer ${tokenAdmin}`)
    expect(res.statusCode).toBe(200)
    });
    test("should Delete a testimonials with token user", async () => {
        const res = await request(app)
        .del("/testimonials/1")
        .set('Authorization', `Bearer ${tokenuser}`)
    expect(res.statusCode).toBe(401)
    });
});


