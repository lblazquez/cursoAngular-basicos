import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

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

  // de esta manera enviamos eventos o datos de salida desde nuestro componente
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0 ) { return; }

    this.onNuevoPersonaje.emit( this.nuevo );

    this.nuevo = {
        nombre: '',
        poder : 0
    };

  }

}
