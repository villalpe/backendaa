'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar rutas
var user_routes = require('./routes/user');
var animal_routes = require('./routes/animal');

//middleware de body-parser
app.use(bodyParser.urlencoded({extended: false}));
//Convertir lo que traiga el body a json
app.use(bodyParser.json());

//Configurar cabeceras y cors

//rutas base
app.use('/api', user_routes);
app.use('/api', animal_routes);

//Exportar modulo
module.exports = app;

