import { Component, Input } from '@angular/core';
import { IWeather } from 'src/mock/itemsData';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  @Input()
  weather: IWeather;

}
