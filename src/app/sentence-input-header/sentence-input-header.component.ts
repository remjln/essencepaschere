import { Component } from '@angular/core';

@Component({
  selector: 'app-sentence-input-header',
  templateUrl: './sentence-input-header.component.html',
  styleUrls: ['./sentence-input-header.component.css']
})
export class SentenceInputHeaderComponent {

    carburantSelect(event: any) {
        console.log(event.target.value)
        if (event.target.value === '')
            event.target.style.color = '#00000050';
        else
            event.target.style.color = 'black';
    }
}
