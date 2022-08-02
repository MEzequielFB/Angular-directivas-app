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

  usuarios:Array<{nombre:string, apellido:string}>; //Atributo de tipo array. Se deben declarar sus atributos y el tipo de estos

  constructor() { //Da valores a los atributos

    this.titulo = "DirectivasApp";
    this.nombre = "";
    this.apellido = "";

    this.registrado = false;

    this.usuarios = [
      {
        nombre: "Juan",
        apellido: "Bautista"
      },
      {
        nombre: "Fernando",
        apellido: "Fernández"
      },
      {
        nombre: "Matías",
        apellido: "Colmena"
      }
    ]
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
