import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
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
  obs$ = interval(900000);
  extras!: WeatherEntity[];
  ultimaActualizacion = '';
  horaActual!: Date;

  constructor() {}

  ngOnInit(): void {
    this.getData();
  }

  ngAfterViewInit(): void {}

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

        this.extras = data.weather;
        console.log(this.extras);
      });
  }
  getForecast() {
    fetch(
      'https://api.openweathermap.org/data/2.5/onecall?lat=39.51&lon=-0.48&exclude=hourly&appid=9416facf5188cc40fe5ba4f71e2f4f06&lang=es&&units=metric'
    )
      .then((respuesta) => respuesta.json())
      .then((data) => {
        if (data != null && data != undefined) this.forecast = data;

        console.log(this.forecast);
      });
  }
}
