import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EMPTY, of} from 'rxjs';
import {map, mergeMap, catchError} from 'rxjs/operators';
import {LOG_USER_IN, LoginAction, UPDATE_USER_AUTHENTICATED} from '../index';
import {AuthService, User} from '../..';
import {Action} from '@ngrx/store';

@Injectable()
export class AuthenticationEffects {

  logUserIn$ = createEffect(() => this.actions$.pipe(
    ofType(LOG_USER_IN),
    mergeMap((action: LoginAction) => {
      const {username, password, airline} = action;
      return this.authService.login(username, password, airline).pipe(
        map((user: User) => {
          return {type: UPDATE_USER_AUTHENTICATED, isLoggedIn: !!user.accessToken};
        }),
        catchError(() => EMPTY)
      );
    })
  ));

  constructor(private actions$: Actions, private authService: AuthService) {
  }
}
