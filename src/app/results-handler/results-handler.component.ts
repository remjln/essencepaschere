import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {GasStationData} from "../gas-station-data";
import {GasStationsGetterService} from "../gas-stations-getter.service";
import {MapResultsComponent} from "../map-results/map-results.component";

@Component({
  selector: 'app-results-handler',
  templateUrl: './results-handler.component.html',
  styleUrls: ['./results-handler.component.css'],
})
export class ResultsHandlerComponent  {
  @ViewChild(MapResultsComponent) mapResultsComponent: MapResultsComponent | undefined;
  @Input() address: string = '';
  @Input() fuelType: string = '';
  gasService: GasStationsGetterService;
  gasResults: GasStationData[] = [];

  constructor(gasStationsGetterService: GasStationsGetterService) {
    this.gasService = gasStationsGetterService;
  }



  updateGasResults(callback:Function) {
    this.gasService.requestAddressData(this.address).subscribe((data: any) => {
      const position = this.gasService.formatAddressData(data);
      this.gasService.requestStationData(this.fuelType, position).subscribe((data: any) => {
        this.gasResults = this.gasService.formatStationData(data, this.fuelType);
        let toDo = this.gasResults.length;
        for (const gasResult of this.gasResults) {
          this.gasService.requestStationName({longitude: gasResult.longitude, latitude: gasResult.latitude})
            .subscribe(data => {
              if (data[0]?.lat !== undefined)
                gasResult.latitude = data[0].lat;
              if (data[0]?.lon !== undefined)
                gasResult.longitude = data[0].lon;
              let road = '';
              let city = '';

              if (data[0]?.address?.road !== undefined && data[0]?.address?.road !== '')
                road = data[0]?.address?.road;
              if (data[0]?.address?.village !== undefined && data[0]?.address?.village !== '')
                city = data[0]?.address?.village;
              else if (data[0]?.address?.town !== undefined && data[0]?.address?.town !== '')
                city = data[0]?.address?.town;
              else if (data[0]?.address?.city !== undefined && data[0]?.address?.city !== '')
                city = data[0]?.address?.city;
              gasResult.address = road + ', ' + city;

              if (data[0]?.address?.amenity !== undefined && data[0]?.address?.amenity !== '')
                gasResult.name = data[0].address.amenity;
              else if (data[0]?.extratags?.operator !== undefined && data[0]?.extratags?.operator !== '')
                gasResult.name = data[0].extratags.operator;
              else if (data[0]?.namedetails?.name !== undefined && data[0]?.namedetails?.name !== '')
                gasResult.name = data[0].namedetails.name;
              else if (data[0]?.namedetails?.brand !== undefined && data[0]?.namedetails?.brand !== '')
                gasResult.name = data[0].namedetails.brand;

              this.mapResultsComponent?.updateMarkers();
              if(--toDo === 0)
                callback();
            });
        }
      });
    });
  }
}
