import {GenericHttpService} from '@core/services';
import {HttpClient} from '@angular/common/http';
import {environment} from '@environments/environment';
import {AirlineAdapter} from './airline.adapter';
import {Injectable} from '@angular/core';

@Injectable()
export class AirlineService extends GenericHttpService<any> {
  constructor(httpClient: HttpClient) {
    super(httpClient, environment.apiUrl, 'airlines', new AirlineAdapter());
  }

  public getAllAirlines() {
    return this.getAll();
  }
}
