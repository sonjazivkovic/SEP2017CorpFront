import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoOsiguranjeNoveCeneComponent } from './auto-osiguranje-nove-cene.component';

describe('AutoOsiguranjeNoveCeneComponent', () => {
  let component: AutoOsiguranjeNoveCeneComponent;
  let fixture: ComponentFixture<AutoOsiguranjeNoveCeneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoOsiguranjeNoveCeneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoOsiguranjeNoveCeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
