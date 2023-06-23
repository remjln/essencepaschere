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
    if (event.target.value === '')
      event.target.style.color = '#00000050';
    else
      event.target.style.color = 'black';
  }

  addressInput(event: any) {
    this.addressEventEmitter.emit(event.target.value);
  }
}
