import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-saved-coord',
  templateUrl: 'saved-coord.html',
})
export class SavedCoordPage {

  // declare variables
  latDegrees: number; latMinutes: number; latSeconds:number;
  lngDegrees:number; lngMinutes:any; lngSeconds:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SavedCoordPage');
  }

  // Data Persistence to retrieve the information that is stored on the phone
  // using get
  ionViewWillEnter() {
    this.storage.get("latDegrees")
      .then((val) => {
        this.latDegrees = val;
      }).catch((err) => {
        console.log(err);
      });

    this.storage.get("latMinutes")
      .then((val) => {
        this.latMinutes = val;
      }).catch((err) => {
        console.log(err);
      });

      this.storage.get("latSeconds")
      .then((val) => {
        this.latSeconds = val;
      }).catch((err) => {
        console.log(err);
      });

      this.storage.get("lngDegrees")
      .then((val) => {
        this.lngDegrees = val;
      }).catch((err) => {
        console.log(err);
      });

    this.storage.get("lngMinutes")
      .then((val) => {
        this.lngMinutes = val;
      }).catch((err) => {
        console.log(err);
      });

      this.storage.get("lngSeconds")
      .then((val) => {
        this.lngSeconds = val;
      }).catch((err) => {
        console.log(err);
      });
  }

}
