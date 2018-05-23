import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { CarruselPeliculasComponent } from './carrusel-peliculas/carrusel-peliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PeliculaComponent,
    CarruselPeliculasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
