import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'mostrar-email',
  template: `
        <div *ngIf="emailContacto">Email de Contacto: <strong>{{emailContacto}}
            <h4>{{title}}</h4>
            <button (click)="delEmailContacto()">Eliminar email de Contacto</button>
            </strong>
        </div>
  `
})
export class MostrarEmailComponent implements DoCheck, OnInit {
  title = 'Mostrar Email';
  emailContacto: string;

  ngOnInit(){
  //Vamos a recoger la variable que esta en el localStorage
    this.emailContacto = localStorage.getItem('emailContacto')
  //console.log(localStorage.getItem('emailContacto'));
  }
  //Este metodo se lanza despues del OnInit y despues tambien del OnChanges. Cada vez que hay un cambio en angular
  ngDoCheck(){
    //Al poner el getItme del localStorage en este metodo actualizamos el valor que damos en Contact
    this.emailContacto = localStorage.getItem('emailContacto')
  }

  delEmailContacto(){
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = null;
  }
}