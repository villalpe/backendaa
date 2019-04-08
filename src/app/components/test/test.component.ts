import { Component } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent {
	public xxxx: string;

	constructor(){
		this.xxxx = 'Voy a harcodear este componente de prueba.....';
	}
}