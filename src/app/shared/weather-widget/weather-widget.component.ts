import { Component, OnInit } from '@angular/core';
import { WeatherEntity } from './WeatherEntity';
import { WeatherInfo } from './weatherInfo';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent implements OnInit {
  weatherInfo!: WeatherInfo;

  extras!: WeatherEntity[];
  constructor() {}

  ngOnInit(): void {
    this.getData();
  }

  ngAfterViewInit(): void {}

  getData() {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=Valencia&appid=9416facf5188cc40fe5ba4f71e2f4f06&lang=es&&units=metric'
    )
      .then((respuesta) => respuesta.json())
      .then((data) => {
        if (data != null && data != undefined) this.weatherInfo = data;

        this.extras = data.weather;
      });
  }
}
