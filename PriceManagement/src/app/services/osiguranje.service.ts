import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator//map';
import 'rxjs/Rx';

@Injectable()
export class OsiguranjeService {

  constructor(private http: HttpClient) { }

  readonly path = 'http://localhost:8060/pm/getAllStavkaOsiguranjaWithPriceById/';

  posaljiNoveCeneOsiguranja(data): Observable<any> {
    return this.http.post('http://localhost:8060/pm/dodajNoviCenovnik',
      JSON.stringify(data),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
      }).map((response: Response) => response);
  }

  getAllStavkaOsiguranjaById(id: string) {
    return this.http.get(this.path + id)
      .map((response: Response) => response);
  }
}
