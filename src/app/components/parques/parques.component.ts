import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter , OnDestroy } from '@angular/core';

@Component({
  selector: 'parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.css']
})
export class ParquesComponent implements OnInit, OnChanges, OnDestroy{
  public title: string;
  @Input() nombre: string;
  public tipo: string;
  @Input() area: number;
  public abierto: boolean;

  //Ahora para pasarle datos de hijo, Parques, a padre Tiendas, usamos:
  @Output() PasameElParque = new EventEmitter();

  constructor() {
  	this.title = "Componente de Parques cargado correctamente";
  	this.nombre = "Parque Nacional";
  	this.tipo = "Parque";
  	this.area= 350;
  	this.abierto = true;
   }
  //Hook que se utliza cuando se carga el constructor. Se ejecuta una vez y es cuando se carga el componente
  ngOnInit() {
    console.log("Metodo lanzado desde OnInit");
  }
  //Hook que se utliza cuando detecta un cambio en el componente o propiedades y se ejecuta cuanta veces haya cambios
  ngOnChanges(changes: SimpleChanges){
    //console.log(changes);
    console.log("Existen cambios en el componente");
  }
  //Justo antes de que angular destruya el componente se lanza este metodo o hook.
  ngOnDestroy(){
    console.log("Se carga metodo OnDestroy...y se va a eliminar el componente");
  }

  mandarDatos(){
    this.PasameElParque.emit({
          'nombre': this.nombre,
          'tipo': this.tipo,
          'area': this.area,
          'abierto': this.abierto
      });
  }
}
