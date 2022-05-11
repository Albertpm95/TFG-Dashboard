import { Component, OnInit } from '@angular/core';
import { Weather } from './weather';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent implements OnInit {
  weather!: Weather;
  weatherBool = false;

  constructor(private WeatherService: WeatherService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.getWeather();
  }

  getWeather(): void {
    this.WeatherService.getWeather().subscribe((respuesta: Weather) => {
      if (respuesta != null) {
        this.weather = respuesta;
      }
      this.weatherBool = true;
    });
  }
}
