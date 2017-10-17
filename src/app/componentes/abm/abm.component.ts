import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PersonasService } from '../../servicios/personas.service';

@Component({
  selector: 'app-abm',
  templateUrl: './abm.component.html',
  styleUrls: ['./abm.component.css']
})


export class AbmComponent implements OnInit {

  datos: any;
  visible: boolean = true;

  nombre: string;
  mail: string;
  sexo: string;
  password: string;
  ruta: string;

  constructor(public datoPersonas: PersonasService) {
    this.datos = datoPersonas.traerTodasLasPersonas();

  }
  agregar() {
    //this.datoPersonas.agregarUnaPersona();
    console.log(this.datoPersonas.agregarUnaPersona(this.nombre, this.mail, this.sexo, this.password));

  }
  eliminar() {
    console.log(this.datoPersonas.eliminarUnaPersona('id'));
  }
  ngOnInit() {
  }

}
