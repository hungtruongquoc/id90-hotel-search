import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {getAllHotels, selectHotelList, selectHotelListMeta} from '@core/store/hotel.reducer';
import {format} from 'date-fns';
import {GeocodingService} from '@core/services/geocoding.service';
import {HotelModel} from '@core/services/hotel/hotel.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-hotel-index',
  templateUrl: './hotel-index.component.html',
  styleUrls: ['./hotel-index.component.scss']
})
export class HotelIndexComponent implements OnInit {

  public hotelList$: Observable<HotelModel[]> = null;
  public hotelMeta$: Observable<any> = null;

  constructor(public store: Store, public geoService: GeocodingService) { }

  ngOnInit(): void {
    this.hotelList$ = this.store.select(selectHotelList) as Observable<HotelModel[]>;
    this.hotelMeta$ = this.store.select(selectHotelListMeta) as Observable<any>;
  }

  getHotelList(params) {
    const newParams = {...params};
    newParams.checkin = format(params.checkin, 'yyyy-MM-dd');
    newParams.checkout = format(params.checkout, 'yyyy-MM-dd');
    this.geoService.getAllLocationInfo(newParams.destination).subscribe(({lat, lng}) => {
      this.store.dispatch(getAllHotels({...newParams, lat, lng}));
    });
  }
}
