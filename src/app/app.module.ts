import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleSingleStreamComponent } from './simple-single-stream/simple-single-stream.component';
import { AdvancedSingleStreamComponent } from './advanced-single-stream/advanced-single-stream.component';
import { MultipleStreamsComponent } from './multiple-streams/multiple-streams.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SimpleSingleStreamComponent,
    AdvancedSingleStreamComponent,
    MultipleStreamsComponent,
    SubjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
