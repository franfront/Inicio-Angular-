import { OpService } from './../services/op.service';
import { Personaje } from './../interfaces/op.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  // @Input("data")
  // personajes: Personaje[]=[]
  get personajes() {
    return this.OpService.personajes;
  }

  constructor(private OpService: OpService) {}
}
