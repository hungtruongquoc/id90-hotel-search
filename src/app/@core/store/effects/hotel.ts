import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EMPTY} from 'rxjs';
import {map, mergeMap, catchError} from 'rxjs/operators';
import {GET_ALL_HOTEL, GetHotelAction, UPDATE_HOTEL_LIST} from '../hotel.reducer';
import {HotelModel} from '../../services/hotel/hotel.model';
import {HotelService} from '../../services/hotel/hotel.service';

@Injectable()
export class HotelEffects {

  getAllHotels$ = createEffect(() => this.actions$.pipe(
    ofType(GET_ALL_HOTEL),
    mergeMap((action: GetHotelAction) => {
      return this.hotelService.getAllHotels(action).pipe(
        map((hotels: HotelModel[]) => {
          return {type: UPDATE_HOTEL_LIST, hotels};
        }),
        catchError(() => EMPTY)
      );
    })
  ));

  constructor(private actions$: Actions, private hotelService: HotelService) {
  }
}
