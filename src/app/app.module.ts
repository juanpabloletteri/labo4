import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AbmComponent } from './componentes/abm/abm.component';

import { PersonasService } from './servicios/personas.service';

@NgModule({
  declarations: [
    AppComponent,
    AbmComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
