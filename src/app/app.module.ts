import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { GalleryPage } from '../pages/gallery/gallery';
import { SavedCoordPage } from '../pages/saved-coord/saved-coord';

import { WaterPageModule } from '../pages/water/water.module';
import { TipsPageModule } from '../pages/tips/tips.module';
import { FirePageModule } from '../pages/fire/fire.module';
import { ShelterPageModule } from '../pages/shelter/shelter.module';
import { KitPageModule } from '../pages/kit/kit.module';
import { MedicalPageModule } from '../pages/medical/medical.module';
import { PlanningPageModule } from '../pages/planning/planning.module';
import { ToolsPageModule } from '../pages/tools/tools.module';
import { FoodPageModule } from '../pages/food/food.module';
import { SavedDetailsPageModule } from '../pages/saved-details/saved-details.module';
import { WeatherPageModule } from '../pages/weather/weather.module';
import { WaterCrossingPageModule } from '../pages/water-crossing/water-crossing.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DataServiceProvider } from '../providers/data-service/data-service';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    GalleryPage,
    HomePage,
    SavedCoordPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    WaterPageModule,
    TipsPageModule,
    FirePageModule,
    ShelterPageModule,
    KitPageModule,
    MedicalPageModule,
    PlanningPageModule,
    ToolsPageModule,
    FoodPageModule,
    SavedDetailsPageModule,
    WeatherPageModule,
    WaterCrossingPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    GalleryPage,
    HomePage,
    SavedCoordPage,
    TabsPage
  ],
  providers: [

    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    DataServiceProvider
  ]
})
export class AppModule {}
