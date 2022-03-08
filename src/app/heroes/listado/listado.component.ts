import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  heroes = ['Ironman', 'Spiderman', 'Hulk', 'Thor'];
  borrado = ''
  borrar() {
    this.borrado = this.heroes.shift() || "";
    
  }
}
