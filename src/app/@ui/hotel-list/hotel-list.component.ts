import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewChecked,
  DoCheck, OnChanges, SimpleChanges, ViewChildren, AfterContentChecked, QueryList
} from '@angular/core';
import {HotelModel} from '../../@core/services/hotel/hotel.model';
import {NzListComponent, NzListItemComponent} from 'ng-zorro-antd/list';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit, AfterViewChecked {

  @ViewChildren(NzListItemComponent, {read: ElementRef})
  public selectedListItems: QueryList<ElementRef>;
  @Input()
  public hotels: HotelModel[] = null;
  @Input()
  public metaInfo: any = null;
  @Input()
  public highlightedHotel: string = null;
  @Output()
  public pageChanged: EventEmitter<number> = new EventEmitter<number>();

  public pageSize = 25;

  constructor() {
  }

  public get totalRecordCount() {
    return this.metaInfo.total_pages * this.pageSize;
  }

  public emitPageChangedEvent(page: number) {
    this.pageChanged.emit(page);
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    if (this.selectedListItems.length > 0) {
      this.selectedListItems.forEach(item => {
        if (item.nativeElement.className.includes('highlighted')) {
          item.nativeElement.scrollIntoView();
        }
      });
    }
  }
}
