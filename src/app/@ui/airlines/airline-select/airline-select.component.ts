import {Component, Input, OnInit} from '@angular/core';
import {AirlineModel} from '@core/services/airline/airline.model';

@Component({
  selector: 'app-airline-select',
  templateUrl: './airline-select.component.html',
  styleUrls: ['./airline-select.component.scss']
})
export class AirlineSelectComponent implements OnInit {

  @Input()
  public airlineList: AirlineModel[];

  @Input()
  public selectedAirline: string;

  constructor() { }

  ngOnInit(): void {

  }

}
