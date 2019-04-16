import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { User } from '../models/user';
import { GLOBAL } from './global';

@Injectable()
export class UserService {
	public url: string

	constructor(
		private _http: HttpClient
		){
		this.url = GLOBAL.url;
	}

	register(){
		return 'Probando servicio de Angular';
	}
}	