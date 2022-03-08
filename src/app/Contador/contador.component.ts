import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>
    <h2>{{ base }}</h2>
    <button (click)="acumular(base)">{{ base }}</button>

    <span> {{ numero }} </span>

    <button (click)="acumular(-base)">-{{ base }}</button>
  `,
})
export class ContadorComponent {
  titulo = 'Contador';
  numero = 0;
  base = 5;
  acumular(valor: number) {
    this.numero += valor;
  }
}
