import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleSingleStreamComponent } from './simple-single-stream/simple-single-stream.component';
import { AdvancedSingleStreamComponent } from './advanced-single-stream/advanced-single-stream.component';
import { MultipleStreamsComponent } from './multiple-streams/multiple-streams.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleSingleStreamComponent,
    AdvancedSingleStreamComponent,
    MultipleStreamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
