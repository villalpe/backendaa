import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
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

	getAnimals(){
		return this._http.get(this.url+'get-animals').map(res => res.json());
	}

	getAnimal(id){
		return this._http.get(this.url+'get-animal/'+id).map(res => res.json());
	}

	editAnimal(token, id, animal){
		let params = JSON.stringify(animal);
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization': token
		});

		return this._http.put(this.url+'update-animal/'+id, params, {headers: headers})
						.map(res => res.json());
	}

}