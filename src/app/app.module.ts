import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResultListComponent } from './result-list/result-list.component';
import { ResultElementComponent } from './result-element/result-element.component';
import { SentenceInputComponent } from './sentence-input/sentence-input.component';
import { SentenceInputHeaderComponent } from './sentence-input-header/sentence-input-header.component';
import { MapResultsComponent } from './map-results/map-results.component';
import { LeafletModule} from "@asymmetrik/ngx-leaflet";
import { ResultsHandlerComponent } from './results-handler/results-handler.component';
import {HttpClientModule} from "@angular/common/http";
import {GasStationsGetterService} from "./gas-stations-getter.service";

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
    HttpClientModule,
    LeafletModule
  ],
  providers: [GasStationsGetterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
