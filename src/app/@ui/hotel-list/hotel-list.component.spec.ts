import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteListComponent } from './hote-list.component';

describe('HoteListComponent', () => {
  let component: HoteListComponent;
  let fixture: ComponentFixture<HoteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
