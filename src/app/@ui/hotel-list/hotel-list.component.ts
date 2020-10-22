import {Component, Input, OnInit} from '@angular/core';
import {HotelModel} from '../../@core/services/hotel/hotel.model';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {

  @Input()
  public hotels: HotelModel[] = null;
  @Input()
  public metaInfo: any = null;

  constructor() { }

  ngOnInit(): void {
  }

}
