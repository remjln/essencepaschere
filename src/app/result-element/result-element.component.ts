import {Component, Input} from '@angular/core';
import {GasStationData} from "../gas-station-data";

@Component({
  selector: 'app-result-element',
  templateUrl: './result-element.component.html',
  styleUrls: ['./result-element.component.css']
})
export class ResultElementComponent {

  // @ts-ignore
  @Input() data: GasStationData;
}
