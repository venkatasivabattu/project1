import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVaccineComponent } from './view-vaccine.component';

describe('ViewVaccineComponent', () => {
  let component: ViewVaccineComponent;
  let fixture: ComponentFixture<ViewVaccineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVaccineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVaccineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
