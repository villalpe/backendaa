import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user1.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ UserService ]
})
export class LoginComponent implements OnInit {
  public title: string;
  public user: User;
  public identity;
  public token;
  constructor(
  		private _route: ActivatedRoute,
  		private _router: Router,
      private _userService: UserService
  	) {
  	this.title = 'Login';
    this.user = new User('','','','','','ROLE_USER','');
   }

  ngOnInit() {
  	console.log('login.component Cargado');
  }

  onSubmit(){
    //loguear al usuario y conseguir su objeto
    this._userService.signup(this.user).subscribe(
      response => {
        this.identity = response.user;

        if(!this.identity || !this.identity._id){
          alert("El usuario no se ha logueado correctamente")
        }else{
          //Mostrar el token
          console.log(this.identity);

          //conseguir el token
          this._userService.signup(this.user, 'true').subscribe(
            response => {
                this.token = response.token;

                if(this.token.length <= 0){
                  alert("El token no se ha generado")
                }else{

                  //Mostrar el token
                  console.log(this.token);
                }
              },
              error => {
                console.log(<any>error);
              }
         );

        }
      },
      error => {
        console.log(<any>error);
      }
     );
  }

}