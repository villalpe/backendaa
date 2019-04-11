'use strict'

var express = require('express');
var userController = require('../controllers/user');

//Ahora usamos el router de express
var api = express.Router();

//Para pruebas del controlador
api.get('/pruebas-del-controlador', userController.pruebas);
//Para registro de Usuario - guardar - se usa metodo post
api.post('/register', userController.saveUser);
api.post('/login' , userController.login);

module.exports = api;