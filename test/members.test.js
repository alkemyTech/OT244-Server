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
    expect(statusCode).toBe(200)
    expect(members.data[0]).toEqual(seederMembers[0]);
  });

  afterEach(async () => {
    await destroyMembers();
  });
});


describe("POST:/members", () => {
  beforeEach(async () => {
    await destroyMembers()
  })

  test("deberia devolver un codigo de estado 201 y retornar el miembro creado", async () => {
    const { body: member, statusCode } = await api
      .post("/members")
      .set("Authorization", `Bearer ${tokenAdmin}`)
      .send(mockupMember);
    
    expect(statusCode).toBe(201)
    expect(member.id).toEqual(1)
    expect(member.name).toEqual("Gonzalo Fleitas")
  })

  test("deberia devolver un codigo de estado 401 y un mensaje al intentar crear un miembro con un usuario no administrador", async () => {
    const { body, statusCode } = await api
      .post("/members")
      .set("Authorization", `Bearer ${tokenUser}`)
      .send(mockupMember)
    
    expect(statusCode).toBe(401)
    expect(body.message).toEqual(
      "You are not authorized to perform this action!"
    );
      
  })
  
  test("deberia devolver un error al intentar crear un Miembro sin el campo 'nombre'", async () => {
    const { body, statusCode } = await api
      .post("/members")
      .set("Authorization", `Bearer ${tokenAdmin}`)
      .send({ ...mockupMember, name: "" });
    const { errors } = body
    
    expect(statusCode).toBe(400)
    expect(errors[0].msg).toEqual("Name must be a string");
  })

  test("deberia crear un miembro solo con los campos 'image y name'", async () => {
    const { body: member, statusCode } = await api
      .post("/members")
      .set("Authorization", `Bearer ${tokenAdmin}`)
      .send({name:"Maxi Ceballos", image :"localhost:3000/asdasdsa"});

    expect(statusCode).toBe(201);
    expect(member.id).toEqual(1);
    expect(member.name).toEqual("Maxi Ceballos");
    expect(member.image)
  })

  afterEach(async () => {
    await destroyMembers()
  })
})




