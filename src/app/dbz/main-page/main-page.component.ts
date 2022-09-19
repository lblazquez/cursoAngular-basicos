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

    //
    // primera versión de la clase
    //   explicación de two-way-bindings
    //
    // public nuevo: Personaje =  {
    //   nombre: 'Trunks',
    //   poder: 14000
    // }
    // agregar( ){
    //   console.log(this.nuevo);
    // }
    // cambiarNombre ( event: any) {
    //     console.log(event.target.value)
    // }

    public personajes: Personaje[] = [
      {
        nombre:'Goku', poder: 15000
      },
      {
        nombre:'Vegeta', poder: 7500
      }
    ];

    public nuevo: Personaje = {
      nombre: '',
      poder: 0
    }

    agregarNuevoPersonaje( p : Personaje) {
      console.log(p);
      // si pongo esta instrucción en el código => cuando en el navegador (Chrome o Edge) se llegue
      // a este punto  => se parará la ejecución y podremos depurar. 
      //debugger;
      this.personajes.push(p);
    }

}
