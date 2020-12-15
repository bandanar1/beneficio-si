import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FiltrosPageModule } from './filtros/filtros.module';
import { ShowMisionPageModule } from './show-mision/show-mision.module';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { File } from '@ionic-native/file/ngx';
import { MapOptionsPageModule } from './map-options/map-options.module';
import { Camera } from '@ionic-native/Camera/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [    
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FiltrosPageModule,  
    ShowMisionPageModule,
    MapOptionsPageModule,
  ],
  providers: [
   
    StatusBar,
    SplashScreen,
    Geolocation,

    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
     File, WebView, Camera, FilePath, 
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

