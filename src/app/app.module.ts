import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

// Servicios
import { PeliculasService } from './services/peliculas.service';

//Pipes
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';

import { APP_ROUTING } from './app.routes';
import { GaleriaComponent } from './components/home/galeria.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BuscarComponent,
    DetallePeliculaComponent,
    PeliculaImagenPipe,
    GaleriaComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
