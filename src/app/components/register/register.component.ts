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
  public status: string;

  constructor(
  		private _route: ActivatedRoute,
  		private _router: Router,
  		private _userService: UserService
  	) {
  	this.title = 'Registrate';
  	this.user = new User('','','','','','ROLE_USER','');
   }

  ngOnInit() {
  	console.log('register.component Cargado');
  }

  onSumbit(registerForm) {
    this._userService.register(this.user).subscribe(
      response => {
        console.log(response.user);
        if(response.user && response.user._id){
            //A this.user le doy el valor de response.user
            //this.user = response.user; 
            this.status = "success";
            this.user = new User('','','','','','ROLE_USER','');
            registerForm.reset();
        }else{
            this.status = "error";
        }
        },
      error => {
        console.log(<any>error);
      }  
    );
  }

}
