import { TestBed, inject } from '@angular/core/testing';

import { MainInsuranceService } from './main-insurance.service';

describe('MainInsuranceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainInsuranceService]
    });
  });

  it('should be created', inject([MainInsuranceService], (service: MainInsuranceService) => {
    expect(service).toBeTruthy();
  }));
});
