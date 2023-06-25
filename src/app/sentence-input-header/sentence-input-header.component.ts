import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-sentence-input-header',
  templateUrl: './sentence-input-header.component.html',
  styleUrls: ['./sentence-input-header.component.css']
})
export class SentenceInputHeaderComponent {
  @Input() address = '';
  @Input() fuelType = '';
  @Output() addressEventEmitter = new EventEmitter<string>();
  @Output() fuelTypeEventEmitter = new EventEmitter<string>();
  @Output() searchEmitter = new EventEmitter<string>();

  carburantSelect(event: any) {
    event.target.setAttribute('data-fuel', event.target.value);
    this.fuelTypeEventEmitter.emit(event.target.value);
  }

  addressInput(event: any) {
    this.addressEventEmitter.emit(event.target.value);
  }

  search() {
    this.searchEmitter.emit();
  }
}
