import {GenericHttpService} from '@core/services';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '@environments/environment';
import {HotelAdapter} from './hotel.adapter';
import {Injectable} from '@angular/core';

@Injectable()
export class HotelService extends GenericHttpService<any> {
  constructor(httpClient: HttpClient) {
    super(httpClient, environment.apiUrl, 'api/v1/hotels.json', new HotelAdapter());
  }

  public getAllHotels({checkin, checkout, destination, guests}: any) {
    return this.getAll({
      httpParams: new HttpParams({
        fromObject: {
          checkin,
          checkout,
          destination,
          guests,
          rooms: '1',
          longitude: null,
          latitude: null,
          sort_criteria: 'Overall',
          sort_order: 'desc',
          per_page: '25',
          page: '1',
          currency: 'USD',
          price_low: null,
          price_high: null,
          radius: '2'
        }
      })
    });
  }
}
