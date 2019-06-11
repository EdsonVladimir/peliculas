import { Platform } from '@ionic/angular';
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

  populares = [];

  vermas = 90;
  constructor(
    private getdata: GetdataService,
    private modalCtrl: ModalController,
    private plt: Platform
    ) {
     }

     ngOnInit() {
      this.plt.ready().then(() => {
        this.mostrarPopulares(true);
      });
    }
  mostrarPopulares(refresh = false, refresher?){
    this.getdata.getPopulares(refresh)
    .subscribe( resp => {
      this.populares = resp;
      if (refresher) {
        refresher.target.complete();
      }    
    });
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
}
