import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent {
  name = 'Ironan';
  edad = 45;

  get capitalizado() {
    return this.name.toUpperCase();
  }

  obtener() {
    return `${this.name} - ${this.edad}`;
  }
  cambiarNombre() {
    this.name = 'Spiderman';
  }
  cambiarEdad(){
    this.edad = 20;
  }
}
