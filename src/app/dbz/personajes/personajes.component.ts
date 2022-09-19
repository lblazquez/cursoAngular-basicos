import { Component, Input } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent  {

  // para marcar que vamos a recibir esta propiedad "de fuera"
  @Input() personajes: Personaje [] = [];

  // ----------------------------------------------------------------------
  // si lo quiero recibir como un alias => hay que poner
  // @Input('alias') propiedadX: tipo;
  // y habría que llamar desde fuera como <app-personajes [alias]="personajes"></app-personajes>
  //

  
}
