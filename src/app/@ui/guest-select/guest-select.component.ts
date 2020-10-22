import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-guest-select',
  templateUrl: './guest-select.component.html',
  styleUrls: ['./guest-select.component.scss']
})
export class GuestSelectComponent implements OnInit {

  @Output()
  public valueChanged: EventEmitter<number> = new EventEmitter<number>();

  public guestCountList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  public countValue = 1;

  constructor() { }

  ngOnInit(): void {
  }

  public emitSelectedValue(data){
    this.valueChanged.emit(data);
  }

}
