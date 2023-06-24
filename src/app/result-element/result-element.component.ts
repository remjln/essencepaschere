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
        else if (data[0]?.extratags?.operator !== undefined && data[0]?.extratags?.operator !== '')
          this.data.address = data[0].extratags.operator;
        else if (data[0]?.namedetails?.name !== undefined && data[0]?.namedetails?.name !== '')
          this.data.address = data[0].namedetails.name;
        else if (data[0]?.namedetails?.brand !== undefined && data[0]?.namedetails?.brand !== '')
          this.data.address = data[0].namedetails.brand;
      });
  }

  constructor(gasStationsGetterService: GasStationsGetterService) {
    this.gasService = gasStationsGetterService;
  }
}
