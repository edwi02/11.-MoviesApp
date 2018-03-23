import { Injectable } from '@angular/core';

import { Jsonp } from '@angular/http';
import 'rxjs/Rx'; //Para utilizar el Map

@Injectable()
export class PeliculasService {

  // URL de la imagen:http://image.tmdb.org/t/p/w300/
  private apiKey:string = "8c470ef009534cfc196d13faa9d2de8b";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  peliculas:any[] = [];

  constructor( private jsonp:Jsonp ) { }

  getCartelera(){

    let desde = new Date();
    let hasta = new Date();

    hasta.setDate( hasta.getDate() + 7 );

    let desdeStr = `${ desde.getFullYear() }-${ desde.getMonth() + 1 }-${ desde.getDate()}`;
    let hastaStr = `${ hasta.getFullYear() }-${ hasta.getMonth() + 1 }-${ hasta.getDate()}`;

    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( resp=> resp.json().results );
  }

  getPopularesNinos(){

    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification=G&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( resp=> resp.json().results );

  }


  getPopulares(){

    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( resp=> resp.json().results );

  }

  buscarPelicula( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
              .map( resp => {
                  this.peliculas = resp.json().results
                  return resp.json().results;
                });

  }

  getPelicula( id:string ){

    let url = `${ this.urlMoviedb }/movie/${ id }?api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( resp=> resp.json() );

  }




}
