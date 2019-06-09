import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../../services/getdata.service';
import { Pelicula } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../../components/detalle/detalle.component';

@Component({
  selector: 'app-popularmovie',
  templateUrl: './popularmovie.page.html',
  styleUrls: ['./popularmovie.page.scss'],
})
export class PopularmoviePage implements OnInit {
  peliculasRecientes: Pelicula[] = [];
  populares: Pelicula[] = [];
  vermas = 100;
  constructor(
    private getdata:GetdataService,
    private modalCtrl: ModalController
    ) {

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
 async mostraDetalle( id:String ){

    const modal = await this.modalCtrl.create({
    component:DetalleComponent,
    componentProps:{
      id
    }
  });
  modal.present();
}
}
