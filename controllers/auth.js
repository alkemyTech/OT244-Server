const express = require('express');
const { request, response } = require('express');
const authService = require('../services/authService');

const login = async(req = request, res = response, next) => {

    const {email, password} = req.body;
    try{
        res.json(await authService.login(email, password));

    }catch(error) {
        next(error);
    }
}

module.exports = {
    login,
}