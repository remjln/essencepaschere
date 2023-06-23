import {Component, ViewChild} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'project';

    downCaretClick() {
        const resultsSection = document.querySelector('#results');
        if (resultsSection !== null)
            window.scrollTo(0, resultsSection.getBoundingClientRect().top);
    }


}
