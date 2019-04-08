import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NGZOO';

  ngOnInit(){
  //Vamos a recoger la variable que esta en el localStorage
  	//this.emailContacto = localStorage.getItem('emailContacto')
	//console.log(localStorage.getItem('emailContacto'));
  }
  //Este metodo se lanza despues del OnInit y despues tambien del OnChanges. Cada vez que hay un cambio en angular
  /*ngDoCheck(){
  	//Al poner el getItme del localStorage en este metodo actualizamos el valor que damos en Contact
  	this.emailContacto = localStorage.getItem('emailContacto')
  }

  delEmailContacto(){
  	localStorage.removeItem('emailContacto');
  	localStorage.clear();
  	this.emailContacto = null;
  }*/
}
