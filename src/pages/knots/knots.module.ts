import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KnotsPage } from './knots';

@NgModule({
  declarations: [
    KnotsPage,
  ],
  imports: [
    IonicPageModule.forChild(KnotsPage),
  ],
})
export class KnotsPageModule {}
