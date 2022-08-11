import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent {

  @Input() usuario!:any; //El signo de exclamación es para que no haga falta inicializar el atributo. De tipo any para que no dé error, en lugar de Object, object o {}
  @Input() i!:number;

  constructor() { }  
}
