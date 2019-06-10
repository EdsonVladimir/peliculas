import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Pelicula, PeliculaDetalle } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
 peliculadetalleStorage: PeliculaDetalle[] = [];
 peliculaPopularesStorage: Pelicula[] = [];
  constructor(private storage: Storage ) { }


  guardarPopulares( popularesnn:any){
    let existe = false;

    for ( const peli of this.peliculaPopularesStorage ){
        if ( peli.id == popularesnn.id ){
            existe = true;
            break;        }
    }
    if ( existe ) {
      this.peliculaPopularesStorage = this.peliculaPopularesStorage.filter( peli => peli.id !== popularesnn.id);
      this.peliculaPopularesStorage.push( popularesnn );
    } else {
      this.peliculaPopularesStorage.push( popularesnn );
    }
      this.storage.set( 'populares', this.peliculaPopularesStorage );
  }
  async cargarDatoslocales() {
    const peliculas =await this.storage.get('populares')
    this.peliculaPopularesStorage = peliculas || [];
    return peliculas;
  }
  guardarDatos( peliculadetalle: PeliculaDetalle ){

  }
}


