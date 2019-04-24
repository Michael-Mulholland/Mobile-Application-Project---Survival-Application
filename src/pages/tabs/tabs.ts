import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { GalleryPage } from '../gallery/gallery';
import { TipsPage } from '../tips/tips';
import { WeatherPage } from '../weather/weather';
import { SavedCoordPage } from '../saved-coord/saved-coord';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = GalleryPage;
  tab4Root = TipsPage;
  tab5Root = WeatherPage;
  tab6Root = SavedCoordPage;
  
  constructor() {

  }
}
