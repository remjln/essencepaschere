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
      else if (event.target.value === 'SP95')
        event.target.style.color = '#004C26';
      else if (event.target.value === 'Gazole')
        event.target.style.color = '#F5871E';
      else if (event.target.value === 'E85')
        event.target.style.color = '#2BBED7';
      else if (event.target.value === 'GPLc')
        event.target.style.color = '#1A6C8D';
      else if (event.target.value === 'E10')
        event.target.style.color = '#56BA48';
      else if (event.target.value === 'SP98')
        event.target.style.color = '#004C26';
      else
        event.target.style.color = 'black';
    }
}
