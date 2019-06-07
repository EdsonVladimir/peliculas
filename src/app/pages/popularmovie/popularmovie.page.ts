import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../../services/getdata.service';
import { Pelicula } from '../../interfaces/interfaces';

@Component({
  selector: 'app-popularmovie',
  templateUrl: './popularmovie.page.html',
  styleUrls: ['./popularmovie.page.scss'],
})
export class PopularmoviePage implements OnInit {
  peliculasRecientes: Pelicula[] = [];
  populares: Pelicula[] = [];
  constructor(private getdata:GetdataService) {

   }
  mostrarPopulares(){
    this.getdata.getPopulares()
    .subscribe( resp => {
      console.log('Populares', resp.results);
      const arrTemp = [ ...this.populares, ...resp.results ];
      this.populares = arrTemp;

    });
  }
  ngOnInit() {
    this.mostrarPopulares()
  }

}
