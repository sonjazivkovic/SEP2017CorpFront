import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoziloComponent } from './vozilo.component';

describe('VoziloComponent', () => {
  let component: VoziloComponent;
  let fixture: ComponentFixture<VoziloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoziloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoziloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
