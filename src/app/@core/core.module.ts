import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ErrorHandler, NgModule} from '@angular/core';
import {GlobalErrorHandler} from './handlers';
import {JwtInterceptor, ServerErrorInterceptor} from './interceptors';
import {AirlineService} from '@core/services';
import {HotelService} from '@core/services/hotel/hotel.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    AirlineService,
    HotelService,
    {provide: ErrorHandler, useClass: GlobalErrorHandler},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptor,
      multi: true,
    },
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
  ],
})
export class CoreModule {
}
