import { Injectable } from '@angular/core';
//import { Http, Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
//import { map } from 'rxjs/operators'; 
//import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

Injectable()
export class UserService {
	public url: string;
	constructor(
		private _http: HttpClient
		){
		this.url = GLOBAL.url;
	}

	register(){
		return "No encuentro la falla";
	}
}