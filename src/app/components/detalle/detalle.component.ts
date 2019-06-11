import { Component, OnInit, Input } from '@angular/core';
import { GetdataService } from '../../services/getdata.service';
import { ModalController } from '@ionic/angular';
import { PeliculaDetalle } from '../../interfaces/interfaces';





@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
@Input() id;

pelicula: PeliculaDetalle = {};
  constructor(private getdataservice: GetdataService,
              private modalCtrl: ModalController
    ) { }

  ngOnInit() {
    console.log('ID', this.id);
    this.mostrarDatos();
    }

    mostrarDatos(refresh = false, refresher?){
      this.getdataservice.getPeliculaPopularDetalle(this.id).subscribe(
        res=>{
          this.pelicula = res;
          if (refresher) {
            refresher.target.complete();
          }
        }
      )
    }
    regresar() {
      this.modalCtrl.dismiss();
    }

}
