const { User } = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;

async function createUser(request, response) {
  try {
    const { name, password, email, lastname } = request.body;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { lastname, name, password: passwordHash },
    });

    if (created) {
      return response.status(201).json(user);
    }
    return response
      .status(200)
      .json({ msg: "There is a user with that email!" });
  } catch (error) {
    console.log(error);
    return response.status(404).json({ msg: "An unexpected error occurred" });
  }
}

module.exports = {
  createUser,
};
