import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Atributos de la clase
  titulo:string;
  nombre:string;
  apellido:string;

  registrado:boolean;

  constructor() { //Da valores a los atributos

    this.titulo = "DirectivasApp";
    this.nombre = "";
    this.apellido = "";

    this.registrado = false;
  }

  registrarUsuario() { //Registra al usuario si los valores de 'nombre' y 'apellido' no son vacíos

    if (this.nombre != "" && this.apellido != "") {
      this.registrado = true;
    }
  }

  setRegistrado(valor:boolean) { //Modifica el valor de 'registrado'
    this.registrado = valor;
  }
}
