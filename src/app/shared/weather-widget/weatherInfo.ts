import { Clouds } from './weatherClouds';
import { Coord } from './weatherCoord';
import { WeatherEntity } from './WeatherEntity';
import { Main } from './WeatherMain';
import { Sys } from './weatherSys';
import { Wind } from './weatherWind';

export interface WeatherInfo {
  coord: Coord;
  weather: WeatherEntity[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
