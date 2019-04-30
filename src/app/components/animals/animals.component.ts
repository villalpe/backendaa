import { Component, OnInit } from '@angular/core';
import { Animal } from '../../models/animal';
import { AnimalService } from '../../services/animal.service';
import { GLOBAL } from '../../services/global';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  providers: [AnimalService]
})
export class AnimalsComponent implements OnInit {
  public title: string;
  public animals: Animal[];
  public url: string;
  constructor(
  		private _animalService: AnimalService
  	) { 
  	this.title = 'Animales del Zoo';
  }

  ngOnInit() {
  	this.getAnimals();
  	this.url = GLOBAL.url;
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

}
