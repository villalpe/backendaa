import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { GLOBAL } from './global';

@Injectable()
export class AnimalService {
	public url: string;

	constructor(
		private _http: Http
	){
		this.url = GLOBAL.url;
	}

	addAnimal(token, animal){
		let params = JSON.stringify(animal);
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization': token
		});

		return this._http.post(this.url+'animal', params, {headers: headers})
					.map(res => res.json());
	}

}