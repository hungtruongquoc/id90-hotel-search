import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HotelIndexComponent} from './pages/hotel-index/hotel-index.component';
import {HotelRoutingModule} from './hotel-routing.module';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {FormsModule} from '@angular/forms';
import {GuestSelectComponent, HotelFilterComponent} from '../../@ui';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {AgmCoreModule} from '@agm/core';
// import {AgmCoreModule} from "@agm/core";

@NgModule({
  declarations: [HotelIndexComponent, GuestSelectComponent, HotelFilterComponent],
  imports: [
    CommonModule,
    HotelRoutingModule,
    NzGridModule,
    NzInputModule,
    NzDatePickerModule,
    NzSelectModule,
    FormsModule,
    NzButtonModule,
    AgmCoreModule,
    // AgmCoreModule.forRoot({apiKey: 'AIzaSyDJcDQhLYPK-ewnnEA3j9FsLN9Ae5cRhhg'})
  ]
})
export class HotelModule {
}