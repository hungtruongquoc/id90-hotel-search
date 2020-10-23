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
  public currentParams: any = null;

  constructor(public store: Store, public geoService: GeocodingService) { }

  ngOnInit(): void {
    this.hotelList$ = this.store.select(selectHotelList) as Observable<HotelModel[]>;
    this.hotelMeta$ = this.store.select(selectHotelListMeta) as Observable<any>;
  }

  private updateHotelList() {
    this.geoService.getAllLocationInfo(this.currentParams.destination).subscribe(({lat, lng}) => {
      this.store.dispatch(getAllHotels({...this.currentParams, lat, lng}));
    });
  }

  public getHotelList(params) {
    const newParams = {...params};
    newParams.checkin = format(params.checkin, 'yyyy-MM-dd');
    newParams.checkout = format(params.checkout, 'yyyy-MM-dd');
    // Updates the params with latest version of values
    this.currentParams = {...newParams};
    this.updateHotelList();
  }

  public getNewPageHotelList(pageNumber: number) {
    if (this.currentParams) {
      this.currentParams.page = pageNumber;
    }
    this.updateHotelList();
  }
}
