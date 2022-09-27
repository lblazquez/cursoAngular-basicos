// para crear un componente con CLI basta con poner 
// ng generate component nombre_modulo
// este en concreto se ha puesto como
//      ng generate component dbz/mainPage --skip-tests
// para que no genere los tests

import { Component, OnInit } from '@angular/core';


import { Personaje } from '../interfaces/dbz.interfaces';


// nos lo llevamos al fichero de interfaces para poderlo usar en varios componentes del módulo
// interface Personaje {
//     nombre: string;
//     poder : number;
// }

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  // valor por defecto
  public nuevo: Personaje = {
    nombre: 'Maestro Roshi ',
    poder: 1000
  }


}
