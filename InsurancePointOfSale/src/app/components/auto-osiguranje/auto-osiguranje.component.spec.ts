import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoOsiguranjeComponent } from './auto-osiguranje.component';

describe('AutoOsiguranjeComponent', () => {
  let component: AutoOsiguranjeComponent;
  let fixture: ComponentFixture<AutoOsiguranjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoOsiguranjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoOsiguranjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
