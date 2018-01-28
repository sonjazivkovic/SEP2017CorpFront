import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedServiceService {

  public mainInsuranceSubject = new Subject<any>();

  constructor() { }

  addMainInsuranceData(data) {
    this.mainInsuranceSubject.next(data);
  }

}
