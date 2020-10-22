import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestSelectComponent } from './guest-select.component';

describe('GuestSelectComponent', () => {
  let component: GuestSelectComponent;
  let fixture: ComponentFixture<GuestSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
