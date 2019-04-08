import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public emailContacto: string;
   constructor() { }

	ngOnInit() {
	  }

	guardarEmail(){
		//console.log(this.emailContacto);
		//Vamos a guardar el emailContacto en el localStorage
		localStorage.setItem('emailContacto', this.emailContacto);
	}
}
