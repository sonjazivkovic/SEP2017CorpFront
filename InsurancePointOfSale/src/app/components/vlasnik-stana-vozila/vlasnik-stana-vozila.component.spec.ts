import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VlasnikStanaVozilaComponent } from './vlasnik-stana-vozila.component';

describe('VlasnikStanaVozilaComponent', () => {
  let component: VlasnikStanaVozilaComponent;
  let fixture: ComponentFixture<VlasnikStanaVozilaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VlasnikStanaVozilaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VlasnikStanaVozilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
