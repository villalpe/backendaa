'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar rutas
var user_routes = require('./routes/user');


//middleware de body-parser
app.use(bodyParser.urlencoded({extended: false}));
//Convertir lo que traiga el body a json
app.use(bodyParser.json());

//Configurar cabeceras y cors

//rutas base
app.use('/api', user_routes);

//Exportar modulo
module.exports = app;

