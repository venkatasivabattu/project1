import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollcComponent } from './enrollc.component';

describe('EnrollcComponent', () => {
  let component: EnrollcComponent;
  let fixture: ComponentFixture<EnrollcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
