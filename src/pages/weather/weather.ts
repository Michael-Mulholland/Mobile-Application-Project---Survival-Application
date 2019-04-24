import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {

  // declare variables
  latDegrees:number; latMinutes:any; latSeconds:any;
  lngDegrees:number; lngMinutes:any; lngSeconds:any;
  myName:String; myTemp:String; myDescription:any;
  mylat:any; mylon:any;
  sunset:any; sunrise:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geo:Geolocation, private dataService:DataServiceProvider, private storage:Storage) {
  }

  ionViewDidLoad(){
    // get the current Latitude and Longitute
    this.geo.getCurrentPosition().then( pos => {
    this.mylat = pos.coords.latitude.toFixed(5);
    this.mylon = pos.coords.longitude.toFixed(5);
    
    // pass in the current Latitude and Longitute to get the current weater - location, temperature and description 
    this.dataService.GetWeatherUpdate(this.mylat,this.mylon).subscribe(
      (data)=>{ // function, assign to a local variable. (data) can be called anything
        this.myName = data.name;
        this.myTemp = ((data.main.temp) - 273.15).toFixed(2);
        this.myDescription = data.weather;
      }); 

    //pass in the current Latitude and Longitute to get the Sunset and Sunrise time for your location
    this.dataService.GetSunsetSunrise(this.mylat,this.mylon).subscribe(
      (data)=>{
        this.sunset = data.results.sunset;
        this.sunrise = data.results.sunrise;
      });

    // calculations to get degrees, minutes & seconds for Latitude
    this.latDegrees = Math.floor(this.mylat);
    this.latMinutes = Math.abs((Math.floor(this.mylat) - this.mylat) * 60).toFixed(2);
    this.latSeconds =  Math.abs((Math.floor(this.latMinutes) - this.latMinutes) * 60).toFixed(2);

    // calculations to get degrees, minutes & seconds for Longitude
    this.lngDegrees = Math.ceil(this.mylon);
    this.lngMinutes =  Math.abs((Math.floor(this.mylon) - this.mylon) * 60).toFixed(2);
    this.lngSeconds =  Math.abs((Math.floor(this.lngMinutes) - this.lngMinutes) * 60).toFixed(2);

  }).catch( err => console.log(err));
  }

  // method to push to the SavedDetailsPage page
  navToPage(){
    this.navCtrl.push('SavedDetailsPage');
  }
    
  // method to save the details to the phones hardware
  onSave(){
    this.storage.set("latDegrees", this.latDegrees);
    this.storage.set("latMinutes", this.latMinutes);
    this.storage.set("latSeconds", this.latSeconds);
    this.storage.set("lngDegrees", this.lngDegrees);
    this.storage.set("lngMinutes", this.lngMinutes);
    this.storage.set("lngSeconds", this.lngSeconds);
  }
}
