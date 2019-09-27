import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {CheckboxModule} from 'primeng/primeng';
// import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { InputPrimengComponent } from './components/input-primeng/input-primeng.component';
import { GmapPrimengComponent } from './components/gmap-primeng/gmap-primeng.component';

@NgModule({
  declarations: [
    AppComponent,
    InputPrimengComponent,
    GmapPrimengComponent
    // CheckboxModule,
    // FormsModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
