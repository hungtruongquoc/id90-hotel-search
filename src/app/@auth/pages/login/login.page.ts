import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '@app/@auth/shared/auth.service';
import {PathMap} from '@app/@core/enums';
import {Store} from '@ngrx/store';
import {getAllAirlines, selectAirlineList} from '@core/store/airline.reducer';
import {Observable, Subscription} from 'rxjs';
import {AirlineModel} from '@core/services/airline/airline.model';
import {logUserIn, selectIsLoggedIn} from '@app/@auth/store';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
  returnUrl: string;
  public airlines$: Observable<AirlineModel[]>;
  private readonly loginSubscription: Subscription = null;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthService,
              private store: Store
  ) {
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || `/${PathMap.Hotel}`;
    this.airlines$ = this.store.select(selectAirlineList) as Observable<AirlineModel[]>;
    this.loginSubscription = this.store.select(selectIsLoggedIn).subscribe(value => {
      if (value) {
        this.router.navigate([this.returnUrl]);
      }
    });
  }

  ngOnInit(): void {
    this.store.dispatch(getAllAirlines());
  }

  ngOnDestroy() {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }

  onSubmit({username, password}) {
    this.store.dispatch(logUserIn({username, password, airline: 'f9'}));
  }


}
