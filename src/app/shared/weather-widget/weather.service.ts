import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { API_URL } from '../../env';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(): Observable<any[]> {
    return this.http.get<any[]>(`${API_URL}/recuperar-weather`);
  }
}
