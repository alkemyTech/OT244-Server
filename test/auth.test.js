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

// BAD LOGIN ATTEMPS

describe("Login a user without a email or an invalid one", () => {
  test("should return an error message", async () => {
    const res = await request(app)
      .post("/auth/login")
      .send({password: "test"});
    expect(res.statusCode).toEqual(400);
    expect(res.text.includes("Email is invalid"));
  })
})

describe("Login a user without a password or an invalid one", () => {
  test("should return an error message", async () => {
    const res = await request(app)
      .post("/auth/login")
      .send({email: "hol@hola.com"});
    expect(res.statusCode).toEqual(400);
    expect(res.text.includes("Password required"));
  });
});

describe("Login a user without any data", () => {
  test("Should return an error message", async () => {
    const res = await request(app)
      .post("/auth/login")
      .send({});
    expect(res.statusCode).toEqual(400);
    expect(res.text.includes("Email is invalid"));
    expect(res.text.includes("Password is required"));
  });
});

describe("Login with wrong password", () => {
  test("Should avoid the successfully login and return 500 status code", async () => {
    const res = await request(app)
      .post("/auth/login")
      .send({email: userOk.email, password: "test"});
    expect(res.statusCode).toEqual(500);
    expect(res.text.includes('Authentication failed! Email / password does not correct'));
  })
})

// Bad register attempts

describe("Register a user without a email or an invalid one", () => {
  test("should return an error message", async () => {
    const res = await request(app)
      .post("/auth/register")
      .send({firstName: "Homer", lastName: "Thompson", password: "password"});
    expect(res.statusCode).toEqual(400);
    expect(res.text.includes("Enter a valid email!"));
  })
})

describe("Register a user without a password or an invalid one", () => {
  test("should return an error message", async () => {
    const res = await request(app)
      .post("/auth/register")
      .send({firstName: "Homer", lastName: "Thompson", email:"homerthomson@aol.com"});
    expect(res.statusCode).toEqual(400);
    expect(res.text.includes("Enter a valid password!"));
  })
})

describe("Register a user without a firstName", () => {
  test("should return an error message", async () => {
    const res = await request(app)
      .post("/auth/register")
      .send({lastName: "Thompson", password: "password" ,email:"homerthomson@aol.com"});
    expect(res.statusCode).toEqual(400);
    expect(res.text.includes("Enter a valid name!"));
  })
})

describe("Register a user without a lastName", () => {
  test("should return an error message", async () => {
    const res = await request(app)
      .post("/auth/register")
      .send({firstName: "Homer", password: "password" ,email:"homerthomson@aol.com"});
    expect(res.statusCode).toEqual(400);
    expect(res.text.includes("Enter a valid lastName!"));
  })
})

