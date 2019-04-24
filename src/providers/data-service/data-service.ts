import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Geolocation } from '@ionic-native/geolocation';   //My Key - 1adedce5480caf3e3181bbf11128ab1e

@Injectable()
export class DataServiceProvider {

  constructor(public http: HttpClient, private geo: Geolocation) {
  }

  // API to retrieve the current weather by passing in the Latitude and Longitude
  GetWeatherUpdate(lat1: number, lon1: number): Observable<any> { //:Observable<any> needs a return and always <any>
    let myUrl: string;

    myUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat1 + '&lon=' + lon1 + '&APPID=1adedce5480caf3e3181bbf11128ab1e';

    return this.http.get(myUrl);
  }

  // API to retrieve the sunrise, sunset times by passing in the Latitude and Longitude
  GetSunsetSunrise(lat1: number, lon1: number): Observable<any> {
    let sunsetSunrise: string;

    sunsetSunrise = 'https://api.sunrise-sunset.org/json?lat=' + lat1 + '&lng=' + lon1 + '&date=today';

    return this.http.get(sunsetSunrise);
  }
}