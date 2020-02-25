import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonConsumptionModule } from '@project-sunbird/common-consumption';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DemoFullModule } from './demo-full/demo-full.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonConsumptionModule,
    // DemoFullModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
