import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleComponent } from './detalle/detalle.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  entryComponents:[
    DetalleComponent
  ],
  declarations: [
    DetalleComponent
  ],
  exports:[
    DetalleComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    TranslateModule
  ]

})
export class ComponentsModule { }
