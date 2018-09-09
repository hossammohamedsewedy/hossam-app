import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { DummyCodeComponent } from './dummyCode.component';


@NgModule({
  declarations: [
    DummyCodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [DummyCodeComponent]
})
export class DummyCodeModule { }
