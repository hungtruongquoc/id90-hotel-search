import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelIndexComponent } from './hotel-index.component';

describe('HotelIndexComponent', () => {
  let component: HotelIndexComponent;
  let fixture: ComponentFixture<HotelIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
