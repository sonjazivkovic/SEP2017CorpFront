import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutnoOsiguranjeNoveCeneComponent } from './putno-osiguranje-nove-cene.component';

describe('PutnoOsiguranjeNoveCeneComponent', () => {
  let component: PutnoOsiguranjeNoveCeneComponent;
  let fixture: ComponentFixture<PutnoOsiguranjeNoveCeneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutnoOsiguranjeNoveCeneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutnoOsiguranjeNoveCeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
