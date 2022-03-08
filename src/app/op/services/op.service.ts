import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/op.interface';

@Injectable()
export class OpService {
  private _personajes: Personaje[] = [
    {
      nombre: 'luffy',
      rol: 'capitan',
    },
    {
      nombre: 'zorro',
      rol: 'espadachin',
    },
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  constructor() {}

  addCharacter(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
