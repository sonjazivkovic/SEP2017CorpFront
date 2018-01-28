import { TestBed, inject } from '@angular/core/testing';

import { InventarStavkiService } from './inventar-stavki.service';

describe('InventarStavkiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InventarStavkiService]
    });
  });

  it('should be created', inject([InventarStavkiService], (service: InventarStavkiService) => {
    expect(service).toBeTruthy();
  }));
});
