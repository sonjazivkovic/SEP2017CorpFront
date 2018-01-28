import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StambenoOsiguranjeComponent } from './stambeno-osiguranje.component';

describe('StambenoOsiguranjeComponent', () => {
  let component: StambenoOsiguranjeComponent;
  let fixture: ComponentFixture<StambenoOsiguranjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StambenoOsiguranjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StambenoOsiguranjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
