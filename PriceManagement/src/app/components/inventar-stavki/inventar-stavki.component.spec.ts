import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarStavkiComponent } from './inventar-stavki.component';

describe('InventarStavkiComponent', () => {
  let component: InventarStavkiComponent;
  let fixture: ComponentFixture<InventarStavkiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarStavkiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarStavkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
