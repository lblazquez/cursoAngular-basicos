import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent  {

  // aquí recibimos los parámetros de entrada a nuestro componente.
  @Input('newElement') nuevo: Personaje=  {
    nombre: 'Maestro Roshi', 
    poder: 1000,   
  }

   // inyectamos el servicio como propiedad privada del objeto
  constructor ( private dbzService: DbzService ){
  }

  agregar() {
    if (this.nuevo.nombre.trim().length === 0 ) { return; }

    // el que hace la lógica de agregar el personaje es el servicio
    this.dbzService.agregarPersonaje( this.nuevo );

    this.nuevo = {
        nombre: '',
        poder : 0
    };

  }

}
