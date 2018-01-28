import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StanComponent } from './stan.component';

describe('StanComponent', () => {
  let component: StanComponent;
  let fixture: ComponentFixture<StanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
