import { Component } from '@angular/core';

@Component({
  selector: 'app-sentence-input',
  templateUrl: './sentence-input.component.html',
  styleUrls: ['./sentence-input.component.css']
})
export class SentenceInputComponent {

    carburantSelect(event: any) {
        console.log(event.target.value)
        if (event.target.value === '')
            event.target.style.color = '#00000050';
        else
            event.target.style.color = 'black';
    }
}
