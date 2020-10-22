import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EMPTY, of} from 'rxjs';
import {map, mergeMap, catchError} from 'rxjs/operators';
import {Action} from '@ngrx/store';
import {AirlineAction, GET_ALL_AIRLINES, UPDATE_AIRLINE_LIST} from '../index';
import {AirlineService} from '../../services';
import {AirlineModel} from '../../services/airline/airline.model';

@Injectable()
export class AirlineEffects {

  getAllAirlines$ = createEffect(() => this.actions$.pipe(
    ofType(GET_ALL_AIRLINES),
    mergeMap((action: AirlineAction) => {
      return this.airlineService.getAllAirlines().pipe(
        map((airlines: AirlineModel[]) => {
          return {type: UPDATE_AIRLINE_LIST, airlines};
        }),
        catchError(() => EMPTY)
      );
    })
  ));

  constructor(private actions$: Actions, private airlineService: AirlineService) {
  }
}
