import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultListComponent } from './result-list/result-list.component';
import { ResultComponent } from './result/result.component';
import { SentenceInputComponent } from './sentence-input/sentence-input.component';
import { MapResultsComponent } from './map-results/map-results.component';
import { LeafletModule} from "@asymmetrik/ngx-leaflet";
import { ResultsHandlerComponent } from './results-handler/results-handler.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultListComponent,
    ResultComponent,
    SentenceInputComponent,
    MapResultsComponent,
    ResultsHandlerComponent
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
