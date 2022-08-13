const app = require('../app');
const request = require('supertest');

const userOk = {
    firstName: "Homer",
    lastName: "Thompson",
    email: "homerthomson@aol.com",
    password: "password",
};

describe("Create a new user", () => {
  test("should create a new user", async () => {
    const res = await request(app)
      .post("/auth/register")
      .send(userOk);
    expect(res.statusCode).toEqual(201);
  });
});

describe("Login a user", () => {
  test("should login a user", async () => {
    const res = await request(app)
      .post("/auth/login")
      .send({email:userOk.email, password: userOk.password});
    expect(res.statusCode).toEqual(200);
  })
});

beforeAll(done => {
  done()
})