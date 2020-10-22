import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericHttpService } from '@app/@core/services';
import { environment } from '@environments/environment';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserAdapter } from './user.adapter';
import { User } from '@app/@auth';
import {Store} from '@ngrx/store';
import {updateUserAuthentication} from "@app/@auth/store";

@Injectable({
  providedIn: 'root',
})
export class AuthService extends GenericHttpService<Partial<User>> {
  private currentUserSubject: BehaviorSubject<User>;

  constructor(httpClient: HttpClient, private store: Store) {
    super(httpClient, environment.apiUrl, 'api/v1/sessions', new UserAdapter());

    const userInfo = localStorage.getItem('currentUser');

    if (userInfo && JSON.parse(userInfo).accessToken) {
      this.store.dispatch(updateUserAuthentication({isLoggedIn: !!JSON.parse(userInfo).accessToken}));
    }

    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(userInfo)
    );
  }

  get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string, airline: string) {
    return super.post({ username, password, airline }, null).pipe(
      map((user) => {
        // Store user details and jwt token in local storage
        // to keep user logged in between page refreshes

        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user as User);
        return user;
      })
    );
  }

  register(user: User) {
    return super.post(user, 'register');
  }

  beginPasswordReset(email: string) {
    return super.post({ email }, 'begin-password-reset');
  }

  resetPassword(username: string, password: string, token: string) {
    return super.post({ username, password, token }, 'reset-password');
  }

  logout() {
    // Remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
