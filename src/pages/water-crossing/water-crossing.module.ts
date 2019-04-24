import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaterCrossingPage } from './water-crossing';

@NgModule({
  declarations: [
    WaterCrossingPage,
  ],
  imports: [
    IonicPageModule.forChild(WaterCrossingPage),
  ],
})
export class WaterCrossingPageModule {}
