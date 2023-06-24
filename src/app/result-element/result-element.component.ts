import {Component, Input, OnInit} from '@angular/core';
import {GasStationData} from "../gas-station-data";
import {GasStationsGetterService} from "../gas-stations-getter.service";

@Component({
  selector: 'app-result-element',
  templateUrl: './result-element.component.html',
  styleUrls: ['./result-element.component.css'],
})
export class ResultElementComponent implements OnInit{

  // @ts-ignore
  @Input() data: GasStationData;
  private gasService: GasStationsGetterService;

  ngOnInit(): void {
    this.gasService.requestStationName({longitude:this.data.longitude, latitude:this.data.latitude})
      .subscribe(data => {
        if (data[0]?.address?.amenity !== undefined && data[0]?.address?.amenity !== '')
          this.data.address = data[0].address.amenity;
      });
  }

  constructor(gasStationsGetterService: GasStationsGetterService) {
    this.gasService = gasStationsGetterService;
  }
}
