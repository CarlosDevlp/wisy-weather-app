import { Component, Input } from '@angular/core';
import { Weather } from '../../../core/models/weather.model';

@Component({
  selector: 'app-weather-forecast-details-card',
  templateUrl: './weather-forecast-details-card.component.html',
  styleUrl: './weather-forecast-details-card.component.css'
})
export class WeatherForecastDetailsCardComponent {
  @Input() weather: Weather = {} as Weather;
}
