'use strict'
//Cargamos Modulos
//bcrypt para cifrar contraseñas
var bcrypt = require('bcrypt-nodejs');

//importar servicio de jwt y luego lo ponemos en el metodo login
var jwt = require('../services/jwt');

//Cargar modelos
var User = require('../models/user');

//Acciones
function pruebas(req, res){
	res.status(200).send({message: "Probando el controlador en metodo pruebas...", user: req.user});

}

function saveUser(req, res){
	//Creamos objeto usuario
	var user = new User();
	//Recoger parametros del body - peticion
	//body-parser ya lo convirtio a un json - lo podemos ver en Postman, body x-www-form-urlencoded
	var params = req.body;
	//console.log(params);
	if(params.password && params.name && params.surname && params.email){
		//Asignar valores al objeto usuario - setear
		user.name = params.name;
		user.surname = params.surname;
		user.email = params.email;
		user.role = "ROLE_USER";
		user.image = null;

		//Primero buscamos si antes de cifrar contraseña y guardar no existe el correo electronico de algun usuario ya guardado
		User.findOne({email: user.email.toLowerCase()}, (err, issetUser) => {
			if(err){
				return res.status(500).send({message: "Error al comprobar el usuario"});
			}else{
				if(!issetUser){
					//Ciframos la contraseña
						bcrypt.hash(params.password, null, null, (err, hash) => {
						//pasamos a user.password ya la contraseña cifrada
						user.password = hash;
						//Guardo usuario en BD
						user.save((err, userStored) => {
							if(err){
								return res.status(500).send({message: "No se pudo guardar usuario"});
							}else{
								if(!userStored){
									return res.status(404).send({message: "No se registrado el usuario"});
								}else{
									return res.status(200).send({user: userStored});
								}
							}
						});
					});
				}else{
					return res.status(200).send({message: "El usuario no puede regsitrarse"})
				}
			}

		});

	}else{
		res.status(200).send({message: "Introduce los datos del usuario correctamente"});
	}
}

function login(req, res){
	var params = req.body;

	var email = params.email;
	var password = params.password;

	User.findOne({email: email.toLowerCase()}, (err, user) => {
		if(err){
			return res.status(500).send({message: "Error al comprobar si existe usuario"});
		}else{
			if(user){
				bcrypt.compare(password, user.password, (err, check) => {
					if(check){
						//Checamos si gettoken, si, trae y genera el token, no, manda el user
						if(params.gettoken){
							return res.status(200).send({
								token: jwt.createToken(user)
							});
						}else{
							return res.status(200).send({user});
						}
					}else{
						return res.status(404).send({message: "El usuario no ha podido logearse correctamente por la contraseña incorrecta"});
					}
				});
			}else{
				return res.status(404).send({message: "El usuario no existe en la BD"});
			}
		}

	});

}

//Exportamos acciones
module.exports = {
	pruebas,
	saveUser,
	login
};