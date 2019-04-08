import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
//Para jQuery dentro de Angular debemos de declarar en el componente estas dos variables
declare var jQuery:any;
declare var $:any

@Component({
  selector: 'tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit, OnChanges {
  public titulo: string;
  public nombreDelParque: string;
  public miParque;
  public dataModel: string;
  constructor() { 
  	this.titulo = "Ya esta cargado el Componente de la tienda";
  }

  ngOnChanges(changes: SimpleChanges){
    /*console.log(changes);
    console.log("ngOnChanges");*/
  }

  ngOnInit() {
  $('#textojq').hide();
  $('#botonjq').click(() =>{
      $('#textojq').slideToggle();
      $("#botonjq span").text("Ocultar");
  });
  }



  mostrarNombre(){
  	/*console.log(this.nombreDelParque);*/
  }

  verDatosParque(event){
  	console.log(event);
  	this.miParque = event;
  }
}
