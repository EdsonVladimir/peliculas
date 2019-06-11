import { NetworkService, ConnectionStatus } from './services/network.service';
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DataLocalService } from './services/data-local.service';
import { TranslateService } from '@ngx-translate/core';


 
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private offlineManager: DataLocalService,
    private networkService: NetworkService,
    private translate: TranslateService
  ) {
    this.initializeApp();
    this.translate.setDefaultLang('en');
    this.translate.use('en');
 

  }
 
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
 
      this.networkService.onNetworkChange().subscribe((status: ConnectionStatus) => {
        if (status == ConnectionStatus.Online) {
          this.offlineManager.checkForEvents().subscribe();
        }
      });
    });
  }
}
