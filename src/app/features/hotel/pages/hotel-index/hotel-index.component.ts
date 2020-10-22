import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {getAllHotels} from '@core/store/hotel.reducer';
import {format} from 'date-fns';

@Component({
  selector: 'app-hotel-index',
  templateUrl: './hotel-index.component.html',
  styleUrls: ['./hotel-index.component.scss']
})
export class HotelIndexComponent implements OnInit {

  constructor(public store: Store) { }

  ngOnInit(): void {
  }

  getHotelList(params) {
    const newParams = {...params};
    newParams.checkin = format(params.checkin, 'yyyy-MM-dd');
    newParams.checkout = format(params.checkout, 'yyyy-MM-dd');
    newParams.destination = 'New York';
    this.store.dispatch(getAllHotels(newParams));
  }
}
