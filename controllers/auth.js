const { User } = require("../models");
const bcrypt = require("bcrypt");
const auth = require('../config/auth')

async function createUser(request, response) {
  try {
    const { firstName, lastName, email, password} = request.body;
    const passwordHash = await bcrypt.hash(password, Number(auth.rounds));

    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { firstName, lastName, password: passwordHash },
    });

    if (created) {
      return response.status(201).json(user);
    }
    return response
      .status(200)
      .json({ msg: "There is a user with that email!" });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ msg: "An unexpected error occurred" });
  }
}

module.exports = {
  createUser,
};
