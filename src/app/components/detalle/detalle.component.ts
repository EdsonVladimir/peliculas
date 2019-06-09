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
  constructor(private getdataservice:GetdataService,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
    console.log('ID', this.id);
    this.getdataservice.getPeliculaPopularDetalle(this.id).subscribe(
      res=>{
        this.pelicula=res;
       console.log(this.pelicula);
      }
    )}
    regresar() {
      this.modalCtrl.dismiss();
    }

}
