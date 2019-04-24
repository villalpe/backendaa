import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Animal } from '../../../models/animal';
import { GLOBAL } from '../../../services/global';
import { AnimalService } from '../../../services/animal.service';

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html',
  providers: [AnimalService]
})
export class ListComponent implements OnInit {
   public title: string;
   public url: string;
   public status: string;
   public animals: Animal[];

   constructor(
   	  	private _route: ActivatedRoute,
  		private _router: Router,
   		private _animalService: AnimalService,
   	){
   		this.title = 'Listado Animales';
   		this.url = GLOBAL.url;
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
 
}