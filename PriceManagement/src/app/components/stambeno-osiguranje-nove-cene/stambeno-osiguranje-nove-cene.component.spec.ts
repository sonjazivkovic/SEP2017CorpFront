import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StambenoOsiguranjeNoveCeneComponent } from './stambeno-osiguranje-nove-cene.component';

describe('StambenoOsiguranjeNoveCeneComponent', () => {
  let component: StambenoOsiguranjeNoveCeneComponent;
  let fixture: ComponentFixture<StambenoOsiguranjeNoveCeneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StambenoOsiguranjeNoveCeneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StambenoOsiguranjeNoveCeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
