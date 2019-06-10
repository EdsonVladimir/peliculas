import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../../services/getdata.service';
import { Pelicula } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../../components/detalle/detalle.component';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-popularmovie',
  templateUrl: './popularmovie.page.html',
  styleUrls: ['./popularmovie.page.scss'],
})
export class PopularmoviePage implements OnInit {

  populares: Pelicula[] = [];

  vermas = 100;
  constructor(
    private getdata: GetdataService,
    private modalCtrl: ModalController,
    private dataLocal: DataLocalService
    ) {
      this.mostrarPopulares();
     }
  mostrarPopulares(){
    this.getdata.getPopulares()
    .subscribe( resp => {
      // console.log('Populares', resp.results);
      this.populares = resp.results;
      this.guardaStorage();
    
    });
  }
  ngOnInit() {

  }
 async mostraDetalle( id: string ) {

    const modal = await this.modalCtrl.create({
    component:DetalleComponent,
    componentProps:{
      id
    }
  }) ;
   modal.present();
  }
  guardaStorage(){
    this.dataLocal.guardarPopulares( this.populares );
  }
}
