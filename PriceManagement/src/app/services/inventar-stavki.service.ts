import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator//map';
import 'rxjs/Rx';
import {map} from "rxjs/operator/map";

@Injectable()
export class InventarStavkiService {

  constructor(private http: HttpClient) { }

  posaljiNoveStavkeInventara(data): Observable<any> {
    return this.http.post('http://localhost:8060/pm/dodajNovuVrednostStavkeOsiguranja',
      JSON.stringify(data),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
      }).map((response: Response) => response);
  }

}
