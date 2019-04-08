import { Component } from '@angular/core';

@Component({
  selector: 'guardar-email',
  template: `
    <h4>{{title}}</h4>
    <input type="text" name="email" [(ngModel)]="emailContacto" />
    <button (click)="guardarEmail()">Guardar Email</button>
  `
})
export class GuardarEmailComponent {
  title = 'Guardar Email';
  emailContacto: string;

  guardarEmail(){
    //Vamos a guardar el emailContacto en el localStorage
    localStorage.setItem('emailContacto', this.emailContacto);
  }
  
}