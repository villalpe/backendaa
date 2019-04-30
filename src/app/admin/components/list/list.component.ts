import { Component, OnInit, DoCheck } from '@angular/core';
declare let $: any;

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
export class ListComponent implements OnInit {
   public title: string;
   public url: string;
   public status: string;
   public animals: Animal[];
   public token;
   public busqueda;

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
     this.getAnimals(); 
   }

    getAnimals(){
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

   deleteAnimal(id){
    $('#myModal-'+id).modal('hide');
    console.log("Id desde el component.listAnimal: "+id);
    this._animalService.deleteAnimal(this.token, id).subscribe(
      response => {
        console.log(response.animal);
        if(!response.animal){
          alert('Error en el servidor');
        }else{
          this.getAnimals();
        }
      },
      error => {
          alert('Error en el servidor');
      }
    );
   }
 
}