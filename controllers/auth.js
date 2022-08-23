const authService = require('../services/authService');
const { User } = require("../models");
const bcrypt = require("bcrypt");
const ejs = require('ejs')
const path = require('path');
const sendEmail = require("../helpers/mailer");
const uploadFile = require('../helpers/uploadAWS');

const roleId = process.env.ADMIN_ROLE

const login = async(req, res, next) => {

    const {email, password} = req.body;
    try{
        res.json(await authService.login(email, password));

    }catch(error) {
        next(error);
    }
}

const createUser = async (request, response) => {
  try {
    const { firstName, lastName, email, password} = request.body;
    const passwordHash = await bcrypt.hash(password, 10);
    let fileLocation;
      
    if(request.files == undefined){
      fileLocation = "https://1.gravatar.com/avatar/7954b53cb8dd62dbae5af2bcc39e7563?s=500&d=mm&r=g"
    }else{
      fileLocation = await uploadFile(request.files.file);
    }
    
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { firstName, lastName, password: passwordHash, roleId, photo: fileLocation },
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
    console.log(error)
    return response.status(500).json({ msg: "An unexpected error occurred" });
  }
}

module.exports = {
    login,
    createUser
}