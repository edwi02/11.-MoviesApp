
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: 'buscar/:texto', component: BuscarComponent },
  { path: 'detalle-pelicula/:id/:pag', component: DetallePeliculaComponent },
  { path: 'detalle-pelicula/:id/:pag/:busqueda', component: DetallePeliculaComponent },
  { path: '**', pathMatch: 'full', redirectTo:'home'}

]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });
