'use strict'

var express = require('express');
var userController = require('../controllers/user');

//Ahora usamos el router de express
var api = express.Router();
//Cargamos el middleware
var md_auth = require('../middlewares/authenticated');

//Para pruebas del controlador
//A este metodo le paso el middleware con el token
api.get('/pruebas-del-controlador', md_auth.ensureAuth, userController.pruebas);
//Para registro de Usuario - guardar - se usa metodo post
api.post('/register', userController.saveUser);
api.post('/login' , userController.login);

module.exports = api;