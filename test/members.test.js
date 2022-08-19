const {
  api,
  seederMembers,
  destroyMembers,
  createMembersMock,
  tokenAdmin,
  tokenUser,
  getMembersResponse,
  mockupMember,
} = require("../helpers/testMember");

describe("GET:/members", () => {
  beforeEach(async () => {
    await createMembersMock();
  });

  test("deberia responder con un codigo de estado 200 al enviar un token de administrador", async () => {
    await api
      .get("/members")
      .set("Authorization", `Bearer ${tokenAdmin}`)
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("deberia responder con un codigo de estado 401 y un mensaje de error al enviar un token de un usuario normal", async () => {
    const { statusCode, body } = await getMembersResponse(tokenUser);

    expect(statusCode).toBe(401);
    expect(body.message).toEqual(
      "You are not authorized to perform this action!"
    );
  });

  test("deberia traer los miembros paginados de la pagina 0", async () => {
    const { body, statusCode } = await getMembersResponse(tokenAdmin, 0);
    const { members } = body;

    expect(statusCode).toBe(200);
    expect(members.data).toHaveLength(seederMembers.slice(0, 10).length);
    expect(members.data[5]).toEqual(seederMembers[5]);
  });

  test("deberia traer los miembros paginados de la pagina 1", async () => {
    const { body, statusCode } = await getMembersResponse(tokenAdmin, 1);
    const { members } = body;
    const pageOneMembers = seederMembers.slice(10);

    expect(statusCode).toBe(200);
    expect(members.data).toHaveLength(pageOneMembers.length);
    expect(members.data[0]).toEqual(pageOneMembers[0]);
  });

  test("deberia traer el Member 1", async () => {
    const { body, statusCode } = await getMembersResponse(tokenAdmin);
    const { members } = body;
    expect(statusCode).toBe(200);
    expect(members.data[0]).toEqual(seederMembers[0]);
  });

  afterEach(async () => {
    await destroyMembers();
  });
});

describe("POST:/members", () => {
  beforeEach(async () => {
    await destroyMembers();
  });

  test("deberia devolver un codigo de estado 201 y retornar el miembro creado", async () => {
    const { body: member, statusCode } = await api
      .post("/members")
      .set("Authorization", `Bearer ${tokenAdmin}`)
      .send(mockupMember);

    expect(statusCode).toBe(201);
    expect(member.id).toEqual(1);
    expect(member.name).toEqual("Gonzalo Fleitas");
  });

  test("deberia devolver un codigo de estado 401 y un mensaje al intentar crear un miembro con un usuario no administrador", async () => {
    const { body, statusCode } = await api
      .post("/members")
      .set("Authorization", `Bearer ${tokenUser}`)
      .send(mockupMember);

    expect(statusCode).toBe(401);
    expect(body.message).toEqual(
      "You are not authorized to perform this action!"
    );
  });

  test("deberia devolver un error al intentar crear un miembro sin el campo 'name'", async () => {
    const { body, statusCode } = await api
      .post("/members")
      .set("Authorization", `Bearer ${tokenAdmin}`)
      .send({ ...mockupMember, name: "" });
    const { errors } = body;

    expect(statusCode).toBe(400);
    expect(errors[0].msg).toEqual("Enter a valid name!");
  });

  test("deberia devolver un error al intentar crear un miembro sin el campo 'image'", async () => {
    const { body, statusCode } = await api
      .post("/members")
      .set("Authorization", `Bearer ${tokenAdmin}`)
      .send({ ...mockupMember, image: "" });
    const { errors } = body;
    console.log(body);
    expect(statusCode).toBe(400);
    expect(errors[0].msg).toEqual("Enter a valid image!");
  });

  test("deberia crear un miembro solo con los campos 'image y name'", async () => {
    const { body: member, statusCode } = await api
      .post("/members")
      .set("Authorization", `Bearer ${tokenAdmin}`)
      .send({ name: "Maxi Ceballos", image: "www.localhost:3000/image.png" });

    expect(statusCode).toBe(201);
    expect(member.id).toEqual(1);
    expect(member.name).toEqual("Maxi Ceballos");
    expect(member.image).toEqual("www.localhost:3000/image.png");
  });

  afterEach(async () => {
    await destroyMembers();
  });
});

describe("DELETE:/members", () => {
  const setAuthAdmin = ["Authorization", `Bearer ${tokenAdmin}`];
  const setAuthUser = ["Authorization", `Bearer ${tokenUser}`];
  beforeEach(async () => {
    await createMembersMock();
  });

  test("Deberia poder eliminar miembros como administrador", async () => {
    const arrayToPromise = [1, 2, 3, 4, 5];
    const promiseDeletes = arrayToPromise.map(async (value) => {
      await api.delete(`/members/${value}`).set(...setAuthAdmin);
    });
    await Promise.all(promiseDeletes);
    const { body } = await api.get("/members?page=0").set(...setAuthAdmin);
    const { members } = body;
    expect(members.data[0].id).not.toBe(1);
    expect(members.data.length).toEqual(seederMembers.length - 5);
  });

  test("deberia devolver un error y un mensaje al intentar eliminar un miembro sin el acceso de administrador", async () => {
    const { body, statusCode } = await api
      .delete("/members/1")
      .set(...setAuthUser);
    expect(statusCode).toBe(401);
    expect(body.message).toEqual(
      "You are not authorized to perform this action!"
    );
  });

  test("deberia devolver un error al intentar eliminar un miembro inexistente", async () => {
    const { statusCode, text } = await api
      .delete("/members/21")
      .set(...setAuthAdmin);

    expect(statusCode).toBe(500);
    expect(text).toEqual(expect.stringContaining("Member not found"));
  });

  test("deberia recibir un codigo de estado 200 al eliminar un miembro", async () => {
    const { statusCode } = await api.delete("/members/1").set(...setAuthAdmin);

    expect(statusCode).toEqual(200);
  });

  afterEach(async () => {
    await destroyMembers();
  });
});

describe("PUT:/members", () => {
  beforeEach(async () => {
    await createMembersMock();
  });
  const memberEdited = {
    name: "Gonzalo Fleitas Editado",
    image: "localhost:4001ImagenEditada",
    description: "backend developer",
    linkedinUrl: "gonzalo-fleitas",
  };

  test("deberia poder editar un miembro por el id", async () => {
    const { body, statusCode } = await api
      .put("/members/1")
      .set("Authorization", `Bearer ${tokenAdmin}`)
      .send(memberEdited);
    const { id, name, linkedinUrl, image, description } = body;
    expect(statusCode).toBe(200);
    expect({ id, name, linkedinUrl, image, description }).toEqual({
      id: 1,
      ...memberEdited,
    });
  });

  test("deberia devolver un mensaje de error y un codigo de estado 404 cuando no exista el miembro", async () => {
    const { body, statusCode } = await api
      .put("/members/100")
      .set("Authorization", `Bearer ${tokenAdmin}`)
      .send(memberEdited);
    expect(statusCode).toBe(404);
    expect(body.msg).toEqual("Member not found");
  });
  test("deberia enviar un codigo de error y un mensaje cuando se intenta editar un miembro con un usuario no administrador", async () => {
    const { body, statusCode } = await api
      .put("/members/100")
      .set("Authorization", `Bearer ${tokenUser}`)
      .send(memberEdited);
    expect(statusCode).toBe(401);
    expect(body.message).toEqual(
      "You are not authorized to perform this action!"
    );
  });

  afterEach(async () => {
    await destroyMembers();
  });
});
