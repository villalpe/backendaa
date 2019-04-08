import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'main-email',
  template: `
    <div class="panel panel-default">
      <h2>{{title}}</h2>
      <mostrar-email></mostrar-email>
      <guardar-email></guardar-email>
    </div>
  `
})
export class MainEmailComponent implements DoCheck, OnInit {
  title = 'Modulo de Emails';
  emailContacto: string;

    ngOnInit(){
      console.log("Componente principal del modulo cargar");
    }

    ngDoCheck(){
    }

}