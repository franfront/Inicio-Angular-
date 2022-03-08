import { OpService } from './../services/op.service';
import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Personaje } from '../interfaces/op.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent  {



  @Input("data") nuevo: Personaje = {
    nombre: "",
    rol: "",
  }

  // @Output() onNewCharacter = new EventEmitter<Personaje>();

  constructor(private OpService: OpService){

  }

  agregar(){
    if (this.nuevo.nombre.trim().length === 0) {return;}
    if (this.nuevo.rol.trim().length === 0) {return;}
    
    // this.onNewCharacter.emit( this.nuevo )
    this.OpService.addCharacter(this.nuevo)
    this.nuevo= {
      nombre: "",
      rol: "",
    }
  }
  
}
