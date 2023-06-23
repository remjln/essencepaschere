import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultListComponent } from './result-list/result-list.component';
import { ResultElementComponent } from './result-element/result-element.component';
import { SentenceInputComponent } from './sentence-input/sentence-input.component';
import { SentenceInputHeaderComponent } from './sentence-input-header/sentence-input-header.component';
import { MapResultsComponent } from './map-results/map-results.component';
import { LeafletModule} from "@asymmetrik/ngx-leaflet";
import { ResultsHandlerComponent } from './results-handler/results-handler.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultListComponent,
    SentenceInputComponent,
    SentenceInputHeaderComponent,
    MapResultsComponent,
    ResultsHandlerComponent,
    ResultElementComponent,
    SentenceInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
