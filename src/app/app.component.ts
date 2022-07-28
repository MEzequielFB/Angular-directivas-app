import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titulo:string;
  nombre:string;
  apellido:string;

  registrado:boolean;

  constructor() {

    this.titulo = "DirectivasApp";
    this.nombre = "";
    this.apellido = "";

    this.registrado = false;
  }

  registrarUsuario() {

    if (this.nombre != "" && this.apellido != "") {
      this.registrado = true;
    }
  }

  setRegistrado(valor:boolean) {
    this.registrado = valor;
  }
}
