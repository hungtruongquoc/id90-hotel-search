import {GenericHttpService} from './generic-http.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class GeocodingService {
  constructor(private httpClient: HttpClient, private store: Store) {
  }

  public getAllLocationInfo(address: string): any {
    ;
    return this.httpClient.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURI(address)
      + '&key=AIzaSyDJcDQhLYPK-ewnnEA3j9FsLN9Ae5cRhhg').pipe(
      map((response: any) => {
        if ('OK' === response.status && response.results.length > 0) {
          const {geometry: {location}} = response.results[0];
          return location;
        }
        return null;
      }),
      catchError(() => null)
    );
  }
}
