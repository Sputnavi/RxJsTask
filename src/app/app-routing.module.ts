import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedSingleStreamComponent } from './advanced-single-stream/advanced-single-stream.component';
import { AppComponent } from './app.component';
import { MultipleStreamsComponent } from './multiple-streams/multiple-streams.component';
import { SimpleSingleStreamComponent } from './simple-single-stream/simple-single-stream.component';

const routes: Routes = [
  { path: '', component: SimpleSingleStreamComponent},
  { path: 'simple-single-stream', component: SimpleSingleStreamComponent},
  { path: 'advanced-single-stream', component: AdvancedSingleStreamComponent},
  { path: 'multiple-streams', component: MultipleStreamsComponent},
  { path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
