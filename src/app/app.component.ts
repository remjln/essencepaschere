import {Component, ViewChild} from '@angular/core';
import {ResultsHandlerComponent} from "./results-handler/results-handler.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  fuelType: string = '';
  address: string = '';
  showResults = false;
  @ViewChild('resultsHandler') resultsHandler : ResultsHandlerComponent;

  addressInput(address: string) {
    this.address = address.trim();
  }

  fuelSelect(fuelType: string) {
    this.fuelType = fuelType;
  }

  downCaretClick() {
    this.showResults = true;
  }

  refreshResults() {
    this.resultsHandler.updateGasResults();
  }
}
