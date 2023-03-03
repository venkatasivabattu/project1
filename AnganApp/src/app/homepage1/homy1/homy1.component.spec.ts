import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homy1Component } from './homy1.component';

describe('Homy1Component', () => {
  let component: Homy1Component;
  let fixture: ComponentFixture<Homy1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homy1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homy1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
