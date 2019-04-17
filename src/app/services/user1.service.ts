import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { GLOBAL } from './global';

@Injectable()
export class UserService {
	public url: string;
	public gettoken: string;

	constructor(
		private _http: Http
		){
		this.url = GLOBAL.url;
	}

	register(user_to_register){
		let params = JSON.stringify(user_to_register);
		//La informacion que se va a enviar es de tipo application/json
		let headers = new Headers({'Content-Type':'application/json'});

		//Ahora hacemos la peticion Post con el metodo del API(register) y le pasamos 3 parametros
		return this._http.post(this.url+'register', params, {headers: headers})
					//y usamos map para recoger la respuesta del API
					.map(res => res.json());
	}

	signup(user_to_login, gettoken = null){
		if(gettoken != null){
			user_to_login.gettoken = gettoken;
		}

		let params = JSON.stringify(user_to_login);
		let headers = new Headers({'Content-Type':'application/json'});
		//Hacemos peticion
		return this._http.post(this.url+'login', params, {headers: headers})
					.map(res => res.json());

	}
}	