'use strict'

var express = require('express');
var animalController = require('../controllers/animal');

//Ahora usamos el router de express
var api = express.Router();
//Cargamos el middleware
var md_auth = require('../middlewares/authenticated');

//Para poder subir archivos, en este caso imagenes, ocupamos el middleware connect-multiparty
var mutlipart = require('connect-multiparty');
var md_upload = mutlipart({ uploadDir: './uploads/animals' });

//Para pruebas del controlador
//A este metodo le paso el middleware con el token
api.get('/pruebas-animales', md_auth.ensureAuth, animalController.pruebas);
api.post('/animal', md_auth.ensureAuth, animalController.saveAnimal);
//En get-animals no hay la necesidad de usar autentificacion ya que queremos traer todos
api.get('/get-animals', animalController.getAnimals)

module.exports = api;