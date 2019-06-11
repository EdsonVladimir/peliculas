import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'; // cambio de idioma
import { TranslateHttpLoader } from '@ngx-translate/http-loader';  //lectura de idioma

import { ComponentsModule } from './components/components.module';

import { IonicStorageModule } from '@ionic/storage';
import { Network } from '@ionic-native/network/ngx';

export function createTranslateLoader(http: HttpClient) {
return new TranslateHttpLoader(http, './assets/i18n/', '.json' );
}



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps:[HttpClient]
        }
    }),
    ComponentsModule,
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    },
    Network
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
