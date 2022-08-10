const { request, response } = require('express');
const authService = require('../services/authService');
const { User } = require("../models");
const bcrypt = require("bcrypt");
const auth = require('../config/auth')
const ejs = require('ejs')
const path = require('path');
const sendEmail = require("../helpers/mailer");

const login = async(req = request, res = response, next) => {

    const {email, password} = req.body;
    try{
        res.json(await authService.login(email, password));

    }catch(error) {
        next(error);
    }
}

async function createUser(request, response) {
  try {
    
    const { firstName, lastName, email, password} = request.body;
    const passwordHash = await bcrypt.hash(password, Number(auth.rounds));
    
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { firstName, lastName, password: passwordHash, roleId: process.env.STANDARD_ROLE, },
    });

    const message = {
      title: "Bienvenid@ al proyecto Somos Más",
      content: firstName + " " + lastName + " " + "Ya sos parte de algo grande",
    }

    const data = await ejs.renderFile(`${path.join(__dirname, '../views/plantilla-email.ejs')}`,{message : message})

    if (created) {
      sendEmail('"OT244 #DarkCode 👻" <foo@example.com>',email,"Somos Más", data)
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
    login,
    createUser
}