import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user1.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ UserService ]
})
export class RegisterComponent implements OnInit {
  public title: string;
  public user: User;
  constructor(
  		private _route: ActivatedRoute,
  		private _router: Router,
  		private _userService: UserService
  	) {
  	this.title = 'Registrar';
  	this.user = new User('','','','','','ROLE_USER','');
   }

  ngOnInit() {
  	console.log('register.component Cargado');
  	console.log(this._userService.register());
  }

  onSumbit() {
  	console.log(this.user);
  }

}
