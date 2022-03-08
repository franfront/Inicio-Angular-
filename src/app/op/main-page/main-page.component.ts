import { OpService } from './../services/op.service';
import { Component } from '@angular/core';
import { Personaje } from '../interfaces/op.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  nuevo: Personaje = {
    nombre: 'sanji',
    rol: 'cocinero',
  };

  // get personajes(): Personaje[] {
  //   return this.OpService.personajes;
  // }

  
  constructor() {}
}
