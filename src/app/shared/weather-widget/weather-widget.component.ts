import { Component, OnInit } from '@angular/core';

import { Weather } from './forecast';
import { WeatherEntity } from './weatherEntity';
import { WeatherInfo } from './weatherInfo';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent implements OnInit {
  weatherInfo!: WeatherInfo;
  forecast!: Weather;
  ultimaActualizacion = '';

  horaActual!: Date;
  velViento = 0;
  rachasViento = 0;
  dirViento = '';
  tempAct = 0;
  tempFeel = 0;
  constructor() {}

  ngOnInit(): void {
    this.getData();
    this.getForecast();
  }

  ngAfterViewInit(): void {}

  public DegToDir(deg: number): string {
    let dir = '';
    let arr = [
      'N',
      'NNE',
      'NE',
      'ENE',
      'E',
      'ESE',
      'SE',
      'SSE',
      'S',
      'SSW',
      'SW',
      'WSW',
      'W',
      'WNW',
      'NW',
      'NNW',
    ];

    return arr[deg % 16];
  }
  getData() {
    this.horaActual = new Date();
    this.ultimaActualizacion =
      this.horaActual.getHours().toLocaleString() +
      ':' +
      this.horaActual.getMinutes().toLocaleString();

    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=Paterna&appid=9416facf5188cc40fe5ba4f71e2f4f06&lang=es&&units=metric'
    )
      .then((respuesta) => respuesta.json())
      .then((data) => {
        if (data != null && data != undefined) this.weatherInfo = data;
        this.velViento = Math.floor(this.weatherInfo.wind.speed * 3.6);
        this.rachasViento = Math.floor(this.weatherInfo.wind.gust * 3.6);
        this.dirViento = this.DegToDir(Math.floor(this.weatherInfo.wind.deg));
        this.weatherInfo.main.temp = Math.round(this.weatherInfo.main.temp);
        this.weatherInfo.main.feels_like = Math.round(
          this.weatherInfo.main.feels_like
        );
        this.weatherInfo.weather[0].icon =
          'http://openweathermap.org/img/w/' +
          this.weatherInfo.weather[0].icon +
          '.png';
      });
  }
  getForecast() {
    fetch(
      'https://api.openweathermap.org/data/2.5/onecall?lat=39.51&lon=-0.48&exclude=hourly&appid=9416facf5188cc40fe5ba4f71e2f4f06&lang=es&&units=metric'
    )
      .then((respuesta) => respuesta.json())
      .then((data) => {
        if (data != null && data != undefined) this.forecast = data;

        this.forecast.daily![1].weather![0].icon =
          'http://openweathermap.org/img/w/' +
          this.forecast.daily![1].weather![0].icon +
          '.png';
        this.forecast.daily![2].weather![0].icon =
          'http://openweathermap.org/img/w/' +
          this.forecast.daily![2].weather![0].icon +
          '.png';
        this.forecast.daily![3].weather![0].icon =
          'http://openweathermap.org/img/w/' +
          this.forecast.daily![3].weather![0].icon +
          '.png';
      });
  }
}
