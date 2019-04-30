import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user1.service';
import { GLOBAL } from '../../services/global'; 

@Component({
  selector: 'app-keeper',
  templateUrl: './keeper.component.html',
  providers: [UserService]
})
export class KeeperComponent implements OnInit {
	public title: string;
	public url: string;
	public keepers: User[];

  constructor(
  	private _userService: UserService
  	) { 
  	this.title = 'Cuidadores de Animales';
  	this.url = GLOBAL.url;
  }

  ngOnInit() {
  	this.getKeepers();
  }

  getKeepers(){
      console.log('componente.listado funciona correctamente');
      this._userService.getKeepers().subscribe(
        response => {
          if(!response.users){

          }else{
            this.keepers = response.users;  
          }
        },
        error => {
          console.log(<any>error);
        }
      );
   }

}
