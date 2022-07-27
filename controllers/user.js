const { User } = require("../models")


const getUserById = async (req, res) => {
  const {id}= req.user
  try {
    const user = await User.findByPk(id, {
      attributes: {
        exclude: ["password","roleId"],
      },
    });

    return res.status(200).json(user)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: "An unexpected error occurred" });
  }
}

module.exports = {
  getUserById
}