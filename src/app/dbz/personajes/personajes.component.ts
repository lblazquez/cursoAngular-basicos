import { Component, Input } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent  {

  // getter que devuelve el listado de personajes del Servicio
  get personajes() {
    return this.dbzService.personajes;
  }

  // inyectamos el servicio como propiedad privada del objeto
  constructor (private dbzService: DbzService) {
  }

}
