import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tips',
  templateUrl: 'tips.html',
})
export class TipsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TipsPage');
  }

  // methods to push from the tips page to the page selected by the user

  water() {
    this.navCtrl.push('WaterPage');
  }

  fire() {
    this.navCtrl.push('FirePage');
  }

  shelter() {
    this.navCtrl.push('ShelterPage');
  }

  kit() {
    this.navCtrl.push('KitPage');
  }

  planning() {
    this.navCtrl.push('PlanningPage');
  }

  food() {
    this.navCtrl.push('FoodPage');
  }

  medical() {
    this.navCtrl.push('MedicalPage');
  }

  tools() {
    this.navCtrl.push('ToolsPage');
  }

  waterCrossing() {
    this.navCtrl.push('WaterCrossingPage');
  }
}
