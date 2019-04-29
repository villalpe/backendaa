import { Component, OnInit, DoCheck } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Animal } from '../../../models/animal';
import { GLOBAL } from '../../../services/global';
import { AnimalService } from '../../../services/animal.service';
import { UserService } from '../../../services/user1.service';

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html',
  providers: [AnimalService, UserService]
})
export class ListComponent implements OnInit, DoCheck {
   public title: string;
   public url: string;
   public status: string;
   public animals: Animal[];
   public token;

   constructor(
   	  private _route: ActivatedRoute,
  		private _router: Router,
   		private _animalService: AnimalService,
      private _userService: UserService
   	){
   		this.title = 'Listado Animales';
   		this.url = GLOBAL.url;
      this.token = this._userService.getToken();
      //this.animal = new Animal('','','',2017,'','');
   }

   ngOnInit(){
		console.log('componente.listado funciona correctamente');
		this._animalService.getAnimals().subscribe(
			response => {
				if(!response.animals){

				}else{
					this.animals = response.animals;	
				}
			},
			error => {
				console.log(<any>error);
			}
		);
   }

   ngDoCheck(){

   }

   deleteAnimal(){
    console.log("Borrar animal");
    /*var id = this.animals._id;
    this._animalService.deleteAnimal(this.token, id).subscribe(
      response => {
        if(!response.animal){
          this.status = 'error';
          console.log(response.animal);
        }else{
          console.log(response.animal);
          this.status = 'success';
        }
      },
      error => {
        var errorMessage = <any>error;

        if(errorMessage != null){
          this.status = 'error';
        }
      }
    );*/
   }
 
}