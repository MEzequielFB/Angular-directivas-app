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

  registrado:boolean; //Si es true muestra nombre y apellido del usuario recientemente registrado. Si es false muestra que no se registró ningpun usuario
  usuarioExiste:boolean; //Si es true muestra msj de error informando que existe el usuario a registrar en el array

  usuarios:Array<{nombre:string, apellido:string}>; //Atributo de tipo array. Se deben declarar sus atributos y el tipo de estos

  constructor() { //Da valores a los atributos

    this.titulo = "DirectivasApp";
    this.nombre = "";
    this.apellido = "";

    this.registrado = false;
    this.usuarioExiste = false;

    this.usuarios = [
      {
        "nombre": "juan",
        "apellido": "bautista"
      },
      {
        "nombre": "fernando",
        "apellido": "fernández"
      },
      {
        "nombre": "matías",
        "apellido": "colmena"
      }
    ]
  }

  registrarUsuario() { //Registra al usuario si los valores de 'nombre' y 'apellido' no son vacíos

    //Se verifica que no exista el usuario a registrar en el array de usuarios. Si no existe se hace un push en el array y 'registrado' es true
    if ((this.nombre != "" && this.apellido != "") && !this.verificarUsuarioExistente()) {

      let usuarioNuevo = 
      {
        nombre: this.nombre.toLowerCase(),
        apellido: this.apellido.toLowerCase()
      };

      this.usuarios.push(usuarioNuevo);
      this.registrado = true;
    }
  }

  setRegistrado(valor:boolean) { //Modifica el valor de 'registrado'
    this.registrado = valor;
  }

  setUsuarioExiste(valor:boolean) { //Modifica el valor de 'usuarioExiste'
    this.usuarioExiste = valor;
  }

  verificarUsuarioExistente():boolean {

    //Recorre array de usuarios
    for (let usuario of this.usuarios) {

      //Si existe el usuario ...
      if (usuario.nombre == this.nombre.toLowerCase() && usuario.apellido == this.apellido.toLowerCase()) {

        this.usuarioExiste = true;
        this.registrado = false;
        return true;
      }
    }
    //Si no existe el usuario ...
    return false;
  }
}