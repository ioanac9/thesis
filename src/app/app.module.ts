import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ResultComponent} from "./result-component/result.component";
import {MainComponent} from "./main-component/main.component";

@NgModule({
  declarations: [
    AppComponent, ResultComponent, MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
