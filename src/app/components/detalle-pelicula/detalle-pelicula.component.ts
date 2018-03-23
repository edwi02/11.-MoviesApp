import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})

export class DetallePeliculaComponent implements OnInit {

  pelicula:any;
  regresarA:string = "";
  textoBusqueda:string = "";

  constructor( public _ps:PeliculasService,
               public router:ActivatedRoute) {

    this.router.params.subscribe( params => {

      console.log(params);
      this.regresarA = params['pag'];

      if( params['busqueda'] ){
        this.textoBusqueda = params['busqueda'];
      }

      this._ps.getPelicula( params['id'] )
              .subscribe( pelicula => {
                console.log(pelicula);
                this.pelicula = pelicula;
              });

    })
  }

  ngOnInit() {
  }

}
