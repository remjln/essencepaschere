import {Component, Inject, Input} from '@angular/core';
import {GasStationData} from "../gas-station-data";

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent {
    @Input() results: any;



}
