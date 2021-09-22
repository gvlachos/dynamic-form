import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicFormModule } from '@dynamic-form-src';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DynamicFormModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
