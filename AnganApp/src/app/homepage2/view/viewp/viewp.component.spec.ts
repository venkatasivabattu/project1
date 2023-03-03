import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpComponent } from './viewp.component';

describe('ViewpComponent', () => {
  let component: ViewpComponent;
  let fixture: ComponentFixture<ViewpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
