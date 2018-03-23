import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  populares:any;
  cartelera:any;
  popularesNinos:any;

  constructor(public _ps:PeliculasService) {
    // _ps.getPopulares().subscribe( (peliculas)=>{
    //     this.peliPopulares = peliculas;
    //     console.log(peliculas);
    // });



    this._ps.getCartelera().subscribe( (peliculas)=> {
      this.cartelera = peliculas;
    });

    this._ps.getPopulares().subscribe( (populares)=> {
      this.populares = populares;
    });

    this._ps.getPopularesNinos().subscribe( (populares)=> {
      this.popularesNinos = populares;
    });


  }

  ngOnInit() {
  }

}
