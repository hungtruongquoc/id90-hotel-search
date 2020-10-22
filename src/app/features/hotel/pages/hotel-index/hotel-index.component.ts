import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-index',
  templateUrl: './hotel-index.component.html',
  styleUrls: ['./hotel-index.component.scss']
})
export class HotelIndexComponent implements OnInit {

  public destination;
  public guestCount: number;
  public date: Date[];

  constructor() { }

  ngOnInit(): void {
  }

  public onChange(result: Date[]): void {
    console.log('onChange: ', result);
  }

  public updateGuestCount(guestCount: number) {
    this.guestCount = guestCount;
  }
}
