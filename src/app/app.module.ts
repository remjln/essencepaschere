import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultListComponent } from './result-list/result-list.component';
import { ResultElementComponent } from './result-element/result-element.component';
import { SentenceInputComponent } from './sentence-input/sentence-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultListComponent,
    ResultElementComponent,
    SentenceInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
