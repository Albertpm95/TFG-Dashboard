import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { API_URL } from '../../env';

import { Observable } from 'rxjs';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(): Observable<Weather> {
    return this.http.get<Weather>(`${API_URL}/recuperar-weather`);
  }
}
