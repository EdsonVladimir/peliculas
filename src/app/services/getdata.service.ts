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


  generos: Genre[] = [];
  constructor(private http:HttpClient) { 
    
  }

  private ejecutarQuery<T>( query: string ) {

    query = URL + query;
    query += `&api_key=${ apiKey }&language=en&include_image_language=en?limit=10`;

    return this.http.get<T>( query );
  }

  getPopulares() {



    const query = `/discover/movie?sort_by=popularity.desc&page=1`;

    return this.ejecutarQuery<RespuestaMDB>(query);

  }
  getPeliculaPopularDetalle( id: string ) {
    return this.ejecutarQuery<PeliculaDetalle>(`/movie/${ id }?a=1`);
  }
}
