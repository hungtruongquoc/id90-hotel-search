import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {getDefaultDateRange} from '@core/helpers';

@Component({
  selector: 'app-hotel-filter',
  templateUrl: './hotel-filter.component.html',
  styleUrls: ['./hotel-filter.component.scss']
})
export class HotelFilterComponent implements OnInit {
  public destination: string = null;
  public date = getDefaultDateRange();
  public guestCount = 1;
  @Output()
  searchClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public updateGuestCount(guestCount: number) {
    this.guestCount = guestCount;
  }

  public emitSearchClicked() {
    const {destination, date, guestCount} = this;
    this.searchClicked.emit({destination, checkin: date[0], checkout: date[1], guests: guestCount});
  }
}
