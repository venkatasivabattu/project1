import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollpComponent } from './enrollp.component';

describe('EnrollpComponent', () => {
  let component: EnrollpComponent;
  let fixture: ComponentFixture<EnrollpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
