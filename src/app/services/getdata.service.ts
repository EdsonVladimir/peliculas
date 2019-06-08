import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaMDB, PeliculaDetalle, Genre } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const URL    = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  private popularesPage = 0;
  generos: Genre[] = [];
  constructor(private http:HttpClient) { 
    
  }

  private ejecutarQuery<T>( query: string ) {

    query = URL + query;
    query += `&api_key=${ apiKey }&language=es&include_image_language=es`;

    return this.http.get<T>( query );
  }

  getPopulares() {

    this.popularesPage++;

    const query = `/discover/movie?sort_by=popularity.desc&page=${ this.popularesPage }`;

    return this.ejecutarQuery<RespuestaMDB>(query);

  }
  getPeliculaPopularDetalle( id: string ) {
    return this.ejecutarQuery<PeliculaDetalle>(`/movie/${ id }?a=1`);
  }
}
