import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-sentence-input',
  templateUrl: './sentence-input.component.html',
  styleUrls: ['./sentence-input.component.css']
})
export class SentenceInputComponent {
  @Output() addressEventEmitter = new EventEmitter<string>();
  @Output() fuelTypeEventEmitter = new EventEmitter<string>();

  carburantSelect(event: any) {
    this.fuelTypeEventEmitter.emit(event.target.value);
    event.target.parentNode.setAttribute('data-fuel', event.target.value);
  }

  addressInput(event: any) {
    this.addressEventEmitter.emit(event.target.value);
  }
}
