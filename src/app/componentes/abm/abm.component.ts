import { Component, OnInit } from '@angular/core';

import { PersonasService } from '../../servicios/personas.service';

@Component({
  selector: 'app-abm',
  templateUrl: './abm.component.html',
  styleUrls: ['./abm.component.css']
})


export class AbmComponent implements OnInit {

  datos: any;

  constructor(public datoPersonas: PersonasService) {

    this.datos = datoPersonas.traerTodasLasPersonas();
 
  }

  ngOnInit() {
  }

}
