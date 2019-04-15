'use strict'

//Cargamos Modulos
//fs para manipular archivos
var fs = require('fs');
//para acceder a rutas de nuestro explorador de archivos
var path = require('path');

//Cargar modelos
var User = require('../models/user');
var Animal = require('../models/animal');

//Acciones
function pruebas(req, res){
	res.status(200).send({message: "Probando el controlador Animals en metodo pruebas...", user: req.user});
}

function saveAnimal(req, res){
	//Creamos objeto usuario
	var animal = new Animal();
	//Recoger parametros del body - peticion
	//body-parser ya lo convirtio a un json - lo podemos ver en Postman, body x-www-form-urlencoded
	var params = req.body;
	//console.log(params);
	if(params.name){
		//Asignar valores al objeto usuario - setear
		animal.name = params.name;
		animal.description = params.description;
		animal.year = params.year;
		animal.image = null;
		//El req.user.sub viene del token creado jwt.js
		animal.user = req.user.sub;

		animal.save((err, animalStored) => {
		if(err){
			return res.status(500).send({message: "No se pudo guardar el animal...error en el servidor"});
		}else{
			if(!animalStored){
				return res.status(404).send({message: "Animal no registrado"});
			}else{
				return res.status(200).send({animal: animalStored});
				}
			}
		});
	}else{
		res.status(200).send({message: "Introduce el nombre del animal correctamente..."});
	}
}

function getAnimals(req, res){
	//Si paso json vacio  es que quiero todos los elementos de la bd
	Animal.find({}).populate({path: 'user'}).exec((err, animals) => {
		if(err){
			return res.status(500).send({message: 'Error en la peticion', err});
		}else{
			if(!animals){
				return res.status(404).send({message: 'No se encontraron animales'});
			}else{
				return res.status(200).send({animals});
			}
		}
	});
}

//Exportamos acciones
module.exports = {
	pruebas,
	saveAnimal,
	getAnimals
};