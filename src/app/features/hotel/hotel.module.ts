import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HotelIndexComponent} from './pages/hotel-index/hotel-index.component';
import {HotelRoutingModule} from './hotel-routing.module';


@NgModule({
  declarations: [HotelIndexComponent],
  imports: [
    CommonModule,
    HotelRoutingModule
  ]
})
export class HotelModule {
}
