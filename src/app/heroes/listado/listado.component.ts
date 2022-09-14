import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

    heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Superlópez'];
    heroesBorrados: string[] = [];

    borrarHeroe() {
      if (this.heroes.length) {
        const heroeBorrado = this.heroes.pop();
        if (heroeBorrado) 
          this.heroesBorrados.unshift( heroeBorrado);
      }

    }

}
