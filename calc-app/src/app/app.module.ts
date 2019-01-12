import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoanInputUIComponent } from './loan-input-ui/loan-input-ui.component';
import { LoanOutputUIComponent } from './loan-output-ui/loan-output-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    LoanInputUIComponent,
    LoanOutputUIComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
