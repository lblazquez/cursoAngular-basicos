import { Injectable } from "@angular/core";

import { Personaje } from "../interfaces/dbz.interfaces";


@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [  // empieza por _ por convenio
        {
          nombre:'Goku', poder: 15000
        },
        {
          nombre:'Vegeta', poder: 7500
        }
      ];
    
    get personajes(): Personaje[] {

        // si lo hago así => estoy pasando el objeto por referencia y cualquiera puede modificar su contenido
        //return this._personajes 

        // si lo paso con el operador spread ... 
        // aquí devolvemos un array [] que contiene todos los elementos de _personajes (... _personajes)
        return [...this._personajes];
        
    }
  
    constructor () {
    }

    agregarPersonaje( p: Personaje) {
        this._personajes.push(p);
    }



}