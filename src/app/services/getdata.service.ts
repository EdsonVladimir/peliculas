import { DataLocalService } from './data-local.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NetworkService, ConnectionStatus } from './network.service';
import { Storage } from '@ionic/storage';
import { Observable, from } from 'rxjs';
import { tap, map} from "rxjs/operators";
import { environment } from '../../environments/environment';

const URL    = environment.url;
const apiKey = environment.apiKey;
const API_STORAGE_KEY = 'specialkey';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  Idioma: string;
  
  constructor(private http: 
              HttpClient, 
              private networkService: NetworkService, 
              private storage: Storage, 
              ) {
      this.Idioma= 'en';
     }
    traerdatos(nom: string) {
      this.Idioma = nom;
    }
    getPopulares(forceRefresh: boolean = false): Observable<any[]> {
      if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline || !forceRefresh) {
        // DevuelvE los datos almacenados en caché desde el almacenamiento
        return from(this.getLocalData('results'));
      } else {
        // Sólo para obtener algunos datos "aleatorios"
        let page = Math.floor(Math.random() * Math.floor(6));
        // Devuelve datos API reales y los almacena localmente
        return this.http.get(`${URL}/movie/popular?api_key=${apiKey}&language=${this.Idioma}-US&page=1`).pipe(
          map(res => res['results']),
          tap(res => {
            this.setLocalData('popular', res);
          })
        )
      }
    }

   //consumiendo detalle pelicula
      getPeliculaPopularDetalle( id: string ) {
         return this.http.get(`${URL}/movie/${id}?api_key=${ apiKey }&language=${this.Idioma}-US`).pipe(
          map(res => res),
          tap(res => {
            this.setLocalData('nuevo', res);
          })
        )}
    private setLocalData(key, data) {
      this.storage.set(`${API_STORAGE_KEY}-${key}`, data);
    }

    private getLocalData(key) {
      return this.storage.get(`${API_STORAGE_KEY}-${key}`);
    }
}
