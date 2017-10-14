import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PersonasService {

  constructor(public http: Http) { }

  traerTodasLasPersonas() {
    let url = 'http://www.estacionamiento.16mb.com/apilab4/persona/';
    //let url = 'https://restcountries.eu/rest/v2/all';
    
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
