import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  // @ts-ignore
  fuelType: string = '';
  // @ts-ignore
  address: string = '';
  showResults = false;

  addressInput(address: string) {
    this.address = address.trim();
  }

  fuelSelect(fuelType: string) {
    this.fuelType = fuelType;
  }

  downCaretClick() {
    this.showResults = true;
  }
}
