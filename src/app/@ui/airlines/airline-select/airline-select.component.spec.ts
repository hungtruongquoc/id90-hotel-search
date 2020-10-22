import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineSelectComponent } from './airline-select.component';

describe('AirlineSelectComponent', () => {
  let component: AirlineSelectComponent;
  let fixture: ComponentFixture<AirlineSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirlineSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlineSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
