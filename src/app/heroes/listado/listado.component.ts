import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroesBorrados: string[] = [];

  borrarHeroe() {
    let heroeBorrado: string = this.heroes.pop()!;
    this.heroesBorrados.push(heroeBorrado);
    //console.log('Borrando ' + heroeBorrado);
  }
}