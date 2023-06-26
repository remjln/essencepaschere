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
  showWait = false;
  @ViewChild('resultsHandler') resultsHandler : ResultsHandlerComponent;

  addressInput(address: string) {
    this.address = address.trim();
  }

  fuelSelect(fuelType: string) {
    this.fuelType = fuelType;
  }

  downCaretClick() {
    this.refreshResults();
  }

  refreshResults() {
    this.showWait = true;
    this.resultsHandler.updateGasResults(() => {
      this.showResults = true;
      this.showWait = false;
    });
  }

  searchAgainClick() {
    setTimeout(() => this.refreshResults(), 200);
  }
}
