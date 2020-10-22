import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-filter',
  templateUrl: './hotel-filter.component.html',
  styleUrls: ['./hotel-filter.component.scss']
})
export class HotelFilterComponent implements OnInit {
  public destination: string;
  public date: Date[];
  public guestCount: number;

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
