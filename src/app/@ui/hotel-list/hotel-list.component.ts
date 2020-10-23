import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
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
  @Input()
  public highlightedHotel: string = null;
  @Output()
  public pageChanged: EventEmitter<number> = new EventEmitter<number>();

  public pageSize = 25;

  constructor() { }

  public get totalRecordCount() {
    return this.metaInfo.total_pages * this.pageSize;
  }

  public emitPageChangedEvent(page: number) {
    this.pageChanged.emit(page);
  }

  ngOnInit(): void {
  }

}
