'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');

var secret = "curso_de_angular_avanzado_backend_240563";

exports.createToken = (user) => {
	//Creamos objeto payload
	var payload = {
		sub: user._id,
		name: user.name,
		surname: user.surname,
		email: user.email,
		role: user.role,
		image: user.image,
		iat: moment().unix(),
		exp: moment().add(30, 'days').unix()
	};

	return jwt.encode(payload, secret);
}