import { Component, OnInit } from '@angular/core';
import { SeoService } from './@core/services';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {selectIsLoggedIn} from '@app/@auth/store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public isLoggedIn$: Observable<boolean>;

  constructor(private seoService: SeoService, private store: Store) {}

  ngOnInit(): void {
    this.seoService.init();
    this.isLoggedIn$ = this.store.select(selectIsLoggedIn) as Observable<boolean>;
  }
}
