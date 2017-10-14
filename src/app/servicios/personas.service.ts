import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PersonasService {

  constructor(public http: Http) { }

  agregarUnaPersona(nombre,mail,sexo,password) {
    let url = 'http://localhost/api/agregarmaterial';
    let persona = { nombre: nombre, mail: mail, sexo: sexo, password: password };
    //let persona = { nombre: "nomdebre", mail: "maidel", sexo: "M", password: "password" };

    return this.http
      .post(url, persona)
      .toPromise()
      .then()
      .catch(this.error);
  }

  traerTodasLasPersonas() {
    let url = 'http://localhost/api/persona/';

    return this.http
      .get(url)
      .toPromise()
      .then(this.extraerDatos)
      .catch(this.error);
  }
  private extraerDatos(res: Response) {
    return res.json() || "no hay datos";
    //return res.json || {};
  }
  private error(error: Response) {
    return error;
  }

}
