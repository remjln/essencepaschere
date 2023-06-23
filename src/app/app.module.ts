import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultListComponent } from './result-list/result-list.component';
import { ResultComponent } from './result/result.component';
import { SentenceInputComponent } from './sentence-input/sentence-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultListComponent,
    ResultComponent,
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
