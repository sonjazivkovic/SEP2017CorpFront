import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutnoOsiguranjeComponent } from './putno-osiguranje.component';

describe('PutnoOsiguranjeComponent', () => {
  let component: PutnoOsiguranjeComponent;
  let fixture: ComponentFixture<PutnoOsiguranjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutnoOsiguranjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutnoOsiguranjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
