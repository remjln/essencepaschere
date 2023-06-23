import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sentence-input-header',
  templateUrl: './sentence-input-header.component.html',
  styleUrls: ['./sentence-input-header.component.css']
})
export class SentenceInputHeaderComponent {
  @Input() address = '';
  @Input() fuelType = '';

    carburantSelect(event: any) {
        if (event.target.value === '')
            event.target.style.color = '#00000050';
        else
            event.target.style.color = 'black';
    }
}
