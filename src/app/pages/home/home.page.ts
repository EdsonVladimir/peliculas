import { Component } from '@angular/core';
import { GetdataService } from '../../services/getdata.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  langs: string[] = [];
  idioma: string;
  constructor(private getdata: GetdataService,
              private translate: TranslateService
              ) {

    this.translate.addLangs(['es', 'en']);
    this.langs = this.translate.getLangs();
  }
  onClick() {

  }
  segmentChanged(ev: any) {
    this.idioma = ev.detail.value;
    this.getdata.traerdatos(this.idioma);
    this.translate.use(this.idioma);
  }
}
