import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';


import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { PeliculaBannerComponent } from './peliculas/pelicula-banner/pelicula-banner.component';
import { PeliculaBotonComponent } from './peliculas/pelicula-boton/pelicula-boton.component';
import { GrillaComponent } from './peliculas/grilla/grilla.component';
import { EnlaceComponent } from './enlace/enlace.component';
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [
    AppComponent,
    PeliculaBannerComponent,
    PeliculaBotonComponent,
    GrillaComponent,
    EnlaceComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    ButtonModule,
    MatButtonModule, MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


