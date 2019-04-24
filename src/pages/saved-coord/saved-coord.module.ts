import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SavedCoordPage } from './saved-coord';

@NgModule({
  declarations: [
    SavedCoordPage,
  ],
  imports: [
    IonicPageModule.forChild(SavedCoordPage),
  ],
})
export class SavedCoordPageModule {}
