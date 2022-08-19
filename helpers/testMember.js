const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const { Member } = require("../models");
const generateToken = require("../helpers/jwt-generation");

const admin = {
  email: "gonzaloTest@gmail.com",
  roleId: 1,
};

const standard = {
  email: "userTest@gmail.com",
  roleId: 2,
};

const tokenAdmin = generateToken(admin);
const tokenUser = generateToken(standard);

const destroyMembers = async () => {
  await Member.destroy({
    where: {},
    truncate: true,
    cascade: false,
    force: true,
  });
};

const createMembersMock = async () => {
  await Member.bulkCreate(seederMembers);
};

const getMembersResponse = async (token, page = 0) => {
  const response = await api
    .get(`/members?page=${page}`)
    .set("Authorization", `Bearer ${token}`);

  return response;
};

const seederMembers = [
  {
    name: "Gonzalo Fleitas",
    image: "localhost:4001/profile.png",
    description: null,
  },
  {
    name: "Dario Miño",
    image: "localhost:4001/profile.png",
    description: null,
  },
  {
    name: "Sebastian Amaya",
    image: "localhost:4001/profile.png",
    description: null,
  },
  {
    name: "Marcelo Romero",
    image: "localhost:4001/profile.png",
    description: null,
  },
  {
    name: "Jose Alvarez",
    image: "localhost:4001/profile.png",
    description: null,
  },
  {
    name: "Martin Caceres",
    image: "localhost:4001/profile.png",
    description: null,
  },
  {
    name: "Maximiliano Ceballos",
    image: "localhost:4001/profile.png",
    description: null,
  },
  {
    name: "Gonzalo dam",
    image: "localhost:4001/profile.png",
    description: null,
  },
  {
    name: "Gonzalo aaa",
    image: "localhost:4001/profile.png",
    description: null,
  },
  {
    name: "Gonzalo asd",
    image: "localhost:4001/profile.png",
    description: null,
  },
  {
    name: "Gonzalo D",
    image: "localhost:4001/profile.png",
    description: null,
  },
  {
    name: "Gonzalo fle",
    image: "localhost:4001/profile.png",
    description: null,
  },
];

const mockupMember = {
  name: "Gonzalo Fleitas",
  image: "localhost:4001/profile.png",
  description: null,
  facebookUrl: null,
  instagramUrl: null,
  linkedinUrl: null,
};
module.exports = {
  //data
  seederMembers,
  mockupMember,
  tokenAdmin,
  tokenUser,
  //metodos
  destroyMembers,
  createMembersMock,
  getMembersResponse,
  api,
};
