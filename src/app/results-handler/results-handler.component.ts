import {Component, Input, OnInit} from '@angular/core';
import {GasStationData} from "../gas-station-data";
import {GasStationsGetterService} from "../gas-stations-getter.service";

@Component({
  selector: 'app-results-handler',
  templateUrl: './results-handler.component.html',
  styleUrls: ['./results-handler.component.css']
})
export class ResultsHandlerComponent implements OnInit{
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
        console.log(this.gasResults)
      });
    });
  }
}
