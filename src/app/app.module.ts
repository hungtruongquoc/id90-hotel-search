import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '@environments/environment';
import {CoreModule} from '@core/core.module';
import {LayoutModule} from './@ui';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {en_US} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers} from './reducers';
import {reducer as AuthenticationReducer} from './@auth/store/index';
import {reducer as AirlineReducer} from './@core/store/index';
import {EffectsModule} from '@ngrx/effects';
import {AppEffects} from './app.effects';
import {AuthenticationEffects} from '@app/@auth/store/effects';
import {AirlineEffects} from '@core/store/effects';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({authentication: AuthenticationReducer, airline: AirlineReducer}),
    EffectsModule.forRoot([AppEffects, AuthenticationEffects, AirlineEffects])
  ],
  providers: [{provide: NZ_I18N, useValue: en_US}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
