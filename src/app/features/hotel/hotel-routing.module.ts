import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HotelIndexComponent} from './pages/hotel-index/hotel-index.component';

const routes: Routes = [
  {
    path: '',
    component: HotelIndexComponent,
    data: {
      title: 'ID90 Travel - Hotels',
      description: ' List of hotels',
      robots: 'index, follow',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelRoutingModule {
}
