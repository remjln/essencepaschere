import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {GasStationData} from "../gas-station-data";
import {GasStationsGetterService} from "../gas-stations-getter.service";
import {MapResultsComponent} from "../map-results/map-results.component";

@Component({
  selector: 'app-results-handler',
  templateUrl: './results-handler.component.html',
  styleUrls: ['./results-handler.component.css']
})
export class ResultsHandlerComponent implements OnInit{
  @ViewChild(MapResultsComponent) mapResultsComponent: MapResultsComponent | undefined;
  @Input() address: string = '';
  @Input() fuelType: string = '';
  gasService: GasStationsGetterService;
  gasResults: GasStationData[] = [];

  constructor(gasStationsGetterService: GasStationsGetterService) {
    this.gasService = gasStationsGetterService;
  }

  ngOnInit(): void {
    this.updateGasResults();
  }

  updateGasResults() {
    this.gasResults = [];
    this.gasService.requestAddressData(this.address).subscribe((data: any) => {
      const position = this.gasService.formatAddressData(data);
      this.gasService.requestStationData(this.fuelType, position).subscribe((data: any) => {
        this.gasResults = this.gasService.formatStationData(data, this.fuelType);
        // Create map
        this.mapResultsComponent?.setView(position.latitude, position.longitude, 12);
        for (const gasResult of this.gasResults) {
          this.mapResultsComponent?.addMarker(gasResult.latitude, gasResult.longitude, gasResult.address);
        }

        // Create list of results
        // TODO
      });
    });
  }
}
