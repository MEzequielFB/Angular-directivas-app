import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Atributos de la clase
  titulo:string;
  
  constructor() { //Da valores a los atributos

    this.titulo = "DirectivasApp";
  }
}