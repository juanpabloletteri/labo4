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
  visible: boolean = false;

  nombre: string;
  mail: string;
  sexo: string;
  //password: string;
  password1: string;
  password2: string;
  ruta: string;

  constructor(public datoPersonas: PersonasService) {
    this.datos = datoPersonas.traerTodasLasPersonas();

  }
  agregar() {
    if (this.password1 == this.password2 && this.password1 != "") {
      //this.datoPersonas.agregarUnaPersona();
      console.log(this.datoPersonas.agregarUnaPersona(this.nombre, this.mail, this.sexo, this.password1));

      alert("El usuario: " + this.nombre + " fue agregado exitosamente");
      this.nombre = "";
      this.mail = "";
      this.password1 = "";
      this.password2 = "";
      this.visible = false;
    }
    else {
      alert("Contraseñas no identicas, por favor reingrese");
      this.password1 = "";
      this.password2 = "";
    }
  }
  onChange(event) {
    var files = event.srcElement.files;
    console.log(files);
  }
  eliminar(id) {
    console.log(this.datoPersonas.eliminarUnaPersona(id));
  }
  ngOnInit() {
  }

}
